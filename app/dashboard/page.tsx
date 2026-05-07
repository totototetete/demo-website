'use client';

import { CalendarDays, Bell, Link as LinkIcon, LayoutDashboard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

export default function DashboardPage() {
  const { t } = useLanguage();
  const dashboard = t.dashboard;

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
            <ul className="space-y-3 md:hidden">
              {dashboard.schedule.map((item) => (
                <li key={`${item.round}-${item.date}`} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-black text-slate-800">{item.round}</p>
                  <dl className="mt-2 space-y-1 text-xs font-bold text-slate-600">
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-slate-500">{dashboard.scheduleHeaders.date}</dt>
                      <dd className="text-right">{item.date}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-slate-500">{dashboard.scheduleHeaders.venue}</dt>
                      <dd className="text-right">{item.venue}</dd>
                    </div>
                    <div className="pt-1">
                      <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">
                        {item.status}
                      </span>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <th className="px-2 py-3">{dashboard.scheduleHeaders.round}</th>
                    <th className="px-2 py-3">{dashboard.scheduleHeaders.date}</th>
                    <th className="px-2 py-3">{dashboard.scheduleHeaders.venue}</th>
                    <th className="px-2 py-3">{dashboard.scheduleHeaders.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboard.schedule.map((item) => (
                    <tr key={`${item.round}-${item.date}`} className="border-b border-slate-100 last:border-0">
                      <td className="px-2 py-4 text-xs font-black text-slate-800 sm:text-sm">{item.round}</td>
                      <td className="px-2 py-4 text-xs font-bold text-slate-600 sm:text-sm">{item.date}</td>
                      <td className="px-2 py-4 text-xs font-bold text-slate-600 sm:text-sm">{item.venue}</td>
                      <td className="px-2 py-4">
                        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    <span className="mr-1 text-slate-400" aria-hidden="true">・</span>
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
                    <p className="mt-1 text-xs font-bold leading-relaxed text-slate-500 break-words">{link.desc}</p>
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
