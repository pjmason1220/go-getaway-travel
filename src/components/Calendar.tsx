'use client';

import { useState, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameMonth } from 'date-fns';

interface CalendarProps {
  icalUrl: string;
  propertyName: string;
}

interface BookedDate {
  start: Date;
  end: Date;
}

export default function Calendar({ icalUrl, propertyName }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedDates, setBookedDates] = useState<BookedDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCalendar() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/calendar/${encodeURIComponent(icalUrl)}`);
        if (!response.ok) {
          throw new Error('Failed to load calendar');
        }
        const data = await response.json();
        setBookedDates(data.events.map((e: { start: string; end: string }) => ({
          start: new Date(e.start),
          end: new Date(e.end),
        })));
      } catch (err) {
        setError('Unable to load availability. Please check VRBO for current availability.');
        console.error('Calendar fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCalendar();
  }, [icalUrl]);

  const isDateBooked = (date: Date): boolean => {
    return bookedDates.some((booking) => {
      const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const start = new Date(booking.start.getFullYear(), booking.start.getMonth(), booking.start.getDate());
      const end = new Date(booking.end.getFullYear(), booking.end.getMonth(), booking.end.getDate());
      return checkDate >= start && checkDate < end;
    });
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startDayOfWeek = getDay(monthStart);

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
        Availability
      </h3>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-neutral-600 mb-4">{error}</p>
        </div>
      ) : (
        <>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Previous month"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h4 className="text-lg font-semibold text-neutral-900">
              {format(currentMonth, 'MMMM yyyy')}
            </h4>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Next month"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Week Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-neutral-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: startDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}

            {/* Days of the month */}
            {daysInMonth.map((day) => {
              const booked = isDateBooked(day);
              const today = isToday(day);
              const inCurrentMonth = isSameMonth(day, currentMonth);

              return (
                <div
                  key={day.toISOString()}
                  className={`
                    aspect-square flex items-center justify-center text-sm rounded-lg
                    ${!inCurrentMonth ? 'text-neutral-300' : ''}
                    ${booked ? 'bg-neutral-200 text-neutral-400 line-through' : 'bg-primary-50 text-primary-700'}
                    ${today ? 'ring-2 ring-accent-500' : ''}
                  `}
                  title={booked ? 'Booked' : 'Available'}
                >
                  {format(day, 'd')}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary-50 border border-primary-200"></div>
              <span className="text-neutral-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-neutral-200"></div>
              <span className="text-neutral-600">Booked</span>
            </div>
          </div>
        </>
      )}

      <p className="text-xs text-neutral-500 mt-4 text-center">
        Calendar synced from VRBO. For the most accurate availability, please check VRBO directly.
      </p>
    </div>
  );
}
