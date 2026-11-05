'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { waLink } from '@/lib/site';

const FIELDS = {
  area: { label: 'Location', options: ['Any phase', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4 · Civic Center', 'Phase 5', 'Phase 6', 'Phase 7 · Spring North', 'Phase 8', 'Safari Valley', 'Bahria Enclave'] },
  stay: { label: 'Stay', options: ['Full night', 'Short time · 2–4 hrs', 'Weekly', 'Monthly', 'Honeymoon / event'] },
  room: { label: 'Room', options: ['Single bed', 'Double bed', 'Studio', 'Full apartment'] },
  guests: { label: 'Guests', options: ['1', '2', '3–4', '5+'] },
} as const;
type Key = keyof typeof FIELDS;

/** Search-style availability bar. Sends the selection to WhatsApp (no data stored). */
export default function QuickBook({ defaults }: { defaults?: Partial<Record<Key, string>> }) {
  const [v, setV] = useState<Record<Key, string>>({
    area: defaults?.area ?? FIELDS.area.options[0],
    stay: defaults?.stay ?? FIELDS.stay.options[0],
    room: defaults?.room ?? FIELDS.room.options[1],
    guests: defaults?.guests ?? FIELDS.guests.options[1],
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi TwinCity Appartments, please check availability:\nLocation: ${v.area}\nStay: ${v.stay}\nRoom: ${v.room}\nGuests: ${v.guests}`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-2 overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_18px_50px_-30px_rgba(21,20,18,.35)] md:grid-cols-[repeat(4,1fr)_auto]" aria-label="Check availability">
      {(Object.keys(FIELDS) as Key[]).map((k, i) => (
        <label key={k} className={`group relative flex cursor-pointer flex-col justify-center px-4 py-3 transition-colors hover:bg-paper/60 md:px-5 md:py-3.5 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} md:border-r border-line`}>
          <span className="eyebrow !text-[0.6rem]">{FIELDS[k].label}</span>
          <span className="relative mt-1 flex items-center">
            <select
              value={v[k]}
              onChange={(e) => setV({ ...v, [k]: e.target.value })}
              className="w-full cursor-pointer appearance-none truncate bg-transparent pr-6 text-[0.875rem] text-ink outline-none"
            >
              {FIELDS[k].options.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4 text-faint transition-transform group-hover:translate-y-0.5" strokeWidth={1.5} />
          </span>
        </label>
      ))}
      <div className="col-span-2 p-2 md:col-span-1">
        <button type="submit" data-cta="whatsapp-quickbook" className="btn btn-primary h-full min-h-12 w-full rounded-[10px] md:px-6">
          Check availability <ArrowRight className="btn-arrow btn-arrow-r h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </form>
  );
}
