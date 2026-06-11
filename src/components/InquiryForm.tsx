import { useState, type FormEvent } from 'react';
import { Reveal } from '../motion/Reveal';

/**
 * Inquiry form — submits via Web3Forms (https://web3forms.com).
 * Get a free access key sent to mattsilliman@gmail.com at web3forms.com,
 * then paste it below. Until then the form falls back to a mailto link.
 */
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

const eventTypes = [
  'Corporate Event',
  'Brand Activation',
  'Wedding',
  'Private Celebration',
  'Festival / Public Event',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
];

export function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      // Key not configured yet — fall back to a pre-filled email.
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `mailto:mattsilliman@gmail.com?subject=${encodeURIComponent(
        'Event Inquiry — Captains of Revelry',
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', 'New Event Inquiry — captainsofrevelry.com');
    data.append('from_name', 'Captains of Revelry Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  };

  return (
    <Reveal>
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="Name" type="text" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="company">Company / Organization</label>
            <input id="company" name="Company" type="text" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="Email" type="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="Phone" type="tel" autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="eventType">Event Type</label>
            <select id="eventType" name="Event Type" required defaultValue="">
              <option value="" disabled>Select…</option>
              {eventTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="guests">Guest Count</label>
            <input id="guests" name="Guest Count" type="number" min="1" placeholder="150" />
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <input id="location" name="Location" type="text" placeholder="City, State / Venue" />
          </div>
          <div className="field">
            <label htmlFor="date">Event Date</label>
            <input id="date" name="Event Date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="budget">Budget Range</label>
            <select id="budget" name="Budget Range" defaultValue="">
              <option value="" disabled>Select…</option>
              {budgetRanges.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="airstream">Airstream Required?</label>
            <select id="airstream" name="Airstream Required" defaultValue="Not sure yet">
              <option>Not sure yet</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="field field--full">
            <label>Add-Ons</label>
            <div className="addons">
              {['Lighting Design', 'Event Planning', 'Production Rentals'].map((a) => (
                <label className="addon" key={a}>
                  <input type="checkbox" name="Add-Ons" value={a} /> {a}
                </label>
              ))}
            </div>
          </div>
          <div className="field field--full">
            <label htmlFor="experience">Desired Experience</label>
            <textarea
              id="experience"
              name="Desired Experience"
              rows={4}
              placeholder="Tell us about the experience you want to create…"
            />
          </div>
        </div>
        <div style={{ marginTop: '1.6rem' }}>
          <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
          </button>
          {status === 'ok' && (
            <p className="form-status form-status--ok">
              Thank you — we received your inquiry and will be in touch within one business day.
            </p>
          )}
          {status === 'err' && (
            <p className="form-status form-status--err">
              Something went wrong. Please email us directly at info@captainsofrevelry.com.
            </p>
          )}
        </div>
      </form>
    </Reveal>
  );
}
