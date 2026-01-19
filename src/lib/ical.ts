import { CalendarEvent } from '@/types';

export async function parseICalFeed(icalUrl: string): Promise<CalendarEvent[]> {
  try {
    const response = await fetch(icalUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal feed: ${response.status}`);
    }

    const icalData = await response.text();
    return parseICalData(icalData);
  } catch (error) {
    console.error('Error fetching iCal feed:', error);
    return [];
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

function parseICalDate(line: string): Date {
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
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1;
    const day = parseInt(cleanDate.substring(6, 8));
    return new Date(year, month, day);
  } else if (cleanDate.length >= 15) {
    // DateTime format: YYYYMMDDTHHMMSS
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1;
    const day = parseInt(cleanDate.substring(6, 8));
    const hour = parseInt(cleanDate.substring(9, 11));
    const minute = parseInt(cleanDate.substring(11, 13));
    const second = parseInt(cleanDate.substring(13, 15));
    return new Date(year, month, day, hour, minute, second);
  }

  return new Date(dateStr);
}

export function isDateBooked(date: Date, events: CalendarEvent[]): boolean {
  const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return events.some((event) => {
    const start = new Date(event.start.getFullYear(), event.start.getMonth(), event.start.getDate());
    const end = new Date(event.end.getFullYear(), event.end.getMonth(), event.end.getDate());
    return checkDate >= start && checkDate < end;
  });
}

export function getBookedDatesForMonth(
  year: number,
  month: number,
  events: CalendarEvent[]
): Set<number> {
  const bookedDays = new Set<number>();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    if (isDateBooked(date, events)) {
      bookedDays.add(day);
    }
  }

  return bookedDays;
}
