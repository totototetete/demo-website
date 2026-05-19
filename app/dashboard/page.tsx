'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, Bell, Link as LinkIcon, LayoutDashboard, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import type { DashboardCalendarEvent } from '@/lib/types';

const toDateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const SUNDAY_INDEX = 0;
const SATURDAY_INDEX = 6;

export default function DashboardPage() {
  const { t, lang } = useLanguage();
  const dashboard = t.dashboard;
  const calendarBase = useMemo(() => {
    const firstEventDate = dashboard.calendarEvents[0]?.date;
    if (!firstEventDate) return new Date();
    const [year, month] = firstEventDate.split('-').map(Number);
    return new Date(year, month - 1, 1);
  }, [dashboard.calendarEvents]);
  const [currentMonth, setCurrentMonth] = useState(
    () => new Date(calendarBase.getFullYear(), calendarBase.getMonth(), 1),
  );

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(lang === 'ja' ? 'ja-JP' : 'en-US', {
        year: 'numeric',
        month: 'long',
      }).format(currentMonth),
    [currentMonth, lang],
  );

  const todayKey = toDateKey(new Date());
  const monthEvents = useMemo(
    () =>
      dashboard.calendarEvents.reduce<Record<string, DashboardCalendarEvent[]>>((acc, event) => {
        if (!acc[event.date]) {
          acc[event.date] = [];
        }
        acc[event.date].push(event);
        return acc;
      }, {}),
    [dashboard.calendarEvents],
  );

  const calendarCells = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const firstWeekday = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    return Array.from({ length: 42 }, (_, index) => {
      const day = index - firstWeekday + 1;
      if (day <= 0) {
        const date = new Date(year, month - 1, daysInPrevMonth + day);
        return {
          dayNumber: daysInPrevMonth + day,
          dateKey: toDateKey(date),
          isCurrentMonth: false,
        };
      }
      if (day > daysInMonth) {
        const date = new Date(year, month + 1, day - daysInMonth);
        return {
          dayNumber: day - daysInMonth,
          dateKey: toDateKey(date),
          isCurrentMonth: false,
        };
      }
      return {
        dayNumber: day,
        dateKey: toDateKey(new Date(year, month, day)),
        isCurrentMonth: true,
      };
    });
  }, [currentMonth]);

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <main>
      <Header />

      <section className="bg-[#002b5b] py-10 text-white md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{t.nav.dashboard}</p>
          <h1 className="mt-3 flex items-center gap-2 text-2xl font-black italic tracking-tight md:gap-3 md:text-4xl">
            <LayoutDashboard className="text-amber-500" aria-hidden="true" />
            {dashboard.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm font-bold text-slate-200 md:text-base">{dashboard.subtitle}</p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-xl font-black italic tracking-tight text-[#002b5b] md:text-2xl">{dashboard.statsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {dashboard.stats.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                <p className="mt-2 text-3xl font-black text-[#002b5b] md:text-4xl">{item.value}</p>
                <p className="mt-2 text-xs font-bold text-slate-500">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-black italic text-[#002b5b]">
              <CalendarDays className="text-amber-500" aria-hidden="true" />
              {dashboard.scheduleTitle}
            </h2>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-black text-slate-800 sm:text-lg">{monthLabel}</h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goToPrevMonth}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100"
                    aria-label={dashboard.calendar.prevMonth}
                  >
                    <ChevronLeft size={14} aria-hidden="true" />
                    <span>{dashboard.calendar.prevMonth}</span>
                  </button>
                  <button
                    type="button"
                    onClick={goToNextMonth}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100"
                    aria-label={dashboard.calendar.nextMonth}
                  >
                    <span>{dashboard.calendar.nextMonth}</span>
                    <ChevronRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 rounded-lg bg-white p-2">
                {dashboard.calendar.weekdays.map((weekday, index) => (
                  <div
                    key={weekday}
                    className={`py-2 text-center text-xs font-bold ${
                      index === SUNDAY_INDEX ? 'text-red-500' : index === SATURDAY_INDEX ? 'text-blue-500' : 'text-slate-500'
                    }`}
                  >
                    {weekday}
                  </div>
                ))}
                {calendarCells.map((cell) => {
                  const events = cell.isCurrentMonth ? monthEvents[cell.dateKey] ?? [] : [];
                  const isToday = cell.dateKey === todayKey;

                  return (
                    <div
                      key={cell.dateKey}
                      className={`min-h-24 rounded-md border p-1.5 sm:min-h-28 sm:p-2 ${
                        cell.isCurrentMonth ? 'border-slate-100 bg-slate-50' : 'border-transparent bg-slate-100/70'
                      } ${isToday ? 'ring-2 ring-amber-400' : ''}`}
                    >
                      <p className={`text-xs font-black ${cell.isCurrentMonth ? 'text-slate-700' : 'text-slate-400'}`}>
                        {cell.dayNumber}
                      </p>
                      <div className="mt-1 space-y-1">
                        {events.map((event, eventIndex) => (
                          <span
                            key={`${cell.dateKey}-${eventIndex}`}
                            className={`block truncate rounded px-1.5 py-1 text-[10px] font-bold leading-tight sm:text-[11px] ${
                              event.type === 'tournament'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-rose-100 text-rose-700'
                            }`}
                          >
                            {event.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" aria-hidden="true" />
                  {dashboard.calendar.legendTournament}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" aria-hidden="true" />
                  {dashboard.calendar.legendDeadline}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" aria-hidden="true" />
                  {dashboard.calendar.today}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="mb-4 flex items-center gap-2 text-base font-black italic text-[#002b5b] sm:text-lg">
                <Bell className="text-amber-500" aria-hidden="true" />
                {dashboard.noticesTitle}
              </h2>
              <ul className="space-y-3">
                {dashboard.notices.map((notice) => (
                  <li
                    key={notice}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs font-bold leading-relaxed text-slate-600 sm:text-sm"
                  >
                    <span className="mr-1 text-slate-400">・</span>
                    {notice}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="mb-4 flex items-center gap-2 text-base font-black italic text-[#002b5b] sm:text-lg">
                <LinkIcon className="text-amber-500" aria-hidden="true" />
                {dashboard.linksTitle}
              </h2>
              <ul className="space-y-3">
                {dashboard.links.map((link) => (
                  <li key={link.label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-sm font-black text-slate-800">{link.label}</p>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-slate-500 [overflow-wrap:anywhere]">{link.desc}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
