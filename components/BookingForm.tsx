'use client';

import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SITE, waLink } from '@/lib/site';
import { WhatsAppIcon } from './Icons';

const STAY_TYPES = ['Short time (2–4 hours)', 'Full night', 'Weekly', 'Monthly', 'Full apartment', 'Honeymoon suite', 'Nikah / event venue', 'Birthday setup'];
const ROOMS = ['Single bed room', 'Double bed room', 'Studio apartment', '2 bed apartment', '3 bed family apartment'];
const AREAS = ['Any phase', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4 / Civic Center', 'Phase 5', 'Phase 6', 'Phase 7 / Spring North', 'Phase 8', 'Safari Valley', 'Bahria Enclave Islamabad'];

/** Builds a WhatsApp message from the form – no data is stored on the website */
export default function BookingForm() {
  const [f, setF] = useState({ name: '', phone: '', stay: STAY_TYPES[1], room: ROOMS[0], area: AREAS[0], checkin: '', checkout: '', guests: '2', breakfast: false, notes: '' });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value });

  const message = [
    `Booking request – ${SITE.name}`,
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Stay: ${f.stay}`,
    `Room: ${f.room}`,
    `Area: ${f.area}`,
    `Check-in: ${f.checkin || '-'}`,
    `Check-out: ${f.checkout || '-'}`,
    `Guests: ${f.guests}`,
    `Breakfast: ${f.breakfast ? 'Yes' : 'No'}`,
    f.notes ? `Notes: ${f.notes}` : '',
  ].filter(Boolean).join('\n');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(message), '_blank', 'noopener');
  };

  const field = 'mt-2 w-full border-0 border-b border-line bg-transparent px-0 pb-2.5 pt-1 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-faint focus:border-ink';
  const label = 'eyebrow block';
  return (
    <form onSubmit={submit} className="grid gap-x-8 gap-y-7 rounded-[14px] border border-line bg-surface p-6 sm:grid-cols-2 sm:p-9">
      <label className={label}>Your name<input required className={field} value={f.name} onChange={set('name')} autoComplete="name" placeholder="Full name" /></label>
      <label className={label}>Phone<input required type="tel" className={field} value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="03XX-XXXXXXX" /></label>
      <label className={label}>Type of stay<select className={`${field} cursor-pointer`} value={f.stay} onChange={set('stay')}>{STAY_TYPES.map((s) => <option key={s}>{s}</option>)}</select></label>
      <label className={label}>Room<select className={`${field} cursor-pointer`} value={f.room} onChange={set('room')}>{ROOMS.map((s) => <option key={s}>{s}</option>)}</select></label>
      <label className={label}>Area<select className={`${field} cursor-pointer`} value={f.area} onChange={set('area')}>{AREAS.map((s) => <option key={s}>{s}</option>)}</select></label>
      <label className={label}>Guests<input type="number" min={1} max={20} className={field} value={f.guests} onChange={set('guests')} /></label>
      <label className={label}>Check-in<input type="datetime-local" className={field} value={f.checkin} onChange={set('checkin')} /></label>
      <label className={label}>Check-out<input type="datetime-local" className={field} value={f.checkout} onChange={set('checkout')} /></label>
      <label className={`${label} sm:col-span-2`}>Notes<textarea rows={2} className={`${field} resize-none`} value={f.notes} onChange={set('notes')} placeholder="Decoration, late arrival, airport pickup…" /></label>
      <label className="flex cursor-pointer items-center gap-3 text-[0.9375rem] sm:col-span-2">
        <input type="checkbox" checked={f.breakfast} onChange={set('breakfast')} className="peer sr-only" />
        <span className="grid h-5 w-5 place-items-center rounded-[5px] border border-ink text-paper transition-colors peer-checked:bg-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2"><Check className="h-3.5 w-3.5" strokeWidth={2} /></span>
        Add breakfast on demand
      </label>
      <div className="flex flex-col gap-4 border-t border-line pt-7 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">Your details go straight to our WhatsApp; nothing is stored on this website. Prefer email? {SITE.emailBooking}</p>
        <button type="submit" className="btn btn-primary btn-lg !pl-2.5" data-cta="whatsapp-booking-form">
          <span className="wa-dot"><WhatsAppIcon className="h-3.5 w-3.5" /></span> Send request <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </form>
  );
}
