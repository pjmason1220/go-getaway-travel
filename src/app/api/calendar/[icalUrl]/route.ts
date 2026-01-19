import { NextRequest, NextResponse } from 'next/server';

interface CalendarEvent {
  start: string;
  end: string;
  summary: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ icalUrl: string }> }
) {
  try {
    const { icalUrl } = await params;
    const decodedUrl = decodeURIComponent(icalUrl);

    // Validate URL
    if (!decodedUrl.includes('vrbo.com/icalendar')) {
      return NextResponse.json(
        { error: 'Invalid iCal URL' },
        { status: 400 }
      );
    }

    // Fetch the iCal feed
    const response = await fetch(decodedUrl, {
      headers: {
        'User-Agent': 'GoGetAway-Calendar/1.0',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal feed: ${response.status}`);
    }

    const icalData = await response.text();
    const events = parseICalData(icalData);

    return NextResponse.json({ events });
  } catch (error) {
    console.error('Calendar fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar data' },
      { status: 500 }
    );
  }
}

function parseICalData(icalData: string): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const lines = icalData.split(/\r?\n/);

  let currentEvent: Partial<CalendarEvent> | null = null;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle line continuations (lines starting with space or tab)
    while (i + 1 < lines.length && (lines[i + 1].startsWith(' ') || lines[i + 1].startsWith('\t'))) {
      i++;
      line += lines[i].substring(1);
    }

    if (line.startsWith('BEGIN:VEVENT')) {
      currentEvent = {};
    } else if (line.startsWith('END:VEVENT') && currentEvent) {
      if (currentEvent.start && currentEvent.end) {
        events.push(currentEvent as CalendarEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith('DTSTART')) {
        currentEvent.start = parseICalDate(line);
      } else if (line.startsWith('DTEND')) {
        currentEvent.end = parseICalDate(line);
      } else if (line.startsWith('SUMMARY:')) {
        currentEvent.summary = line.substring(8);
      }
    }
  }

  return events;
}

function parseICalDate(line: string): string {
  // Handle different date formats:
  // DTSTART:20240115
  // DTSTART;VALUE=DATE:20240115
  // DTSTART:20240115T140000Z
  // DTSTART;TZID=America/New_York:20240115T140000

  const parts = line.split(':');
  const dateStr = parts[parts.length - 1];

  // Remove any timezone suffix and parse
  const cleanDate = dateStr.replace('Z', '');

  if (cleanDate.length === 8) {
    // Date only format: YYYYMMDD
    const year = cleanDate.substring(0, 4);
    const month = cleanDate.substring(4, 6);
    const day = cleanDate.substring(6, 8);
    return `${year}-${month}-${day}T00:00:00.000Z`;
  } else if (cleanDate.length >= 15) {
    // DateTime format: YYYYMMDDTHHMMSS
    const year = cleanDate.substring(0, 4);
    const month = cleanDate.substring(4, 6);
    const day = cleanDate.substring(6, 8);
    const hour = cleanDate.substring(9, 11);
    const minute = cleanDate.substring(11, 13);
    const second = cleanDate.substring(13, 15);
    return `${year}-${month}-${day}T${hour}:${minute}:${second}.000Z`;
  }

  // Fallback
  return new Date(dateStr).toISOString();
}
