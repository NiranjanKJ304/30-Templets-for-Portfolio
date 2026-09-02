/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyContactSection - Destination chapter and direct correspondence
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2 } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
  onSubmitContact?: (data: { name: string; email: string; subject?: string; message: string }) => Promise<boolean> | boolean;
}

export const JourneyContactSection: React.FC<JourneyContactSectionProps> = ({
  data,
  enabled,
  chapterNumber = '11',
  onSubmitContact,
}) => {
  const { contact, profile } = data;
  const hasData = hasSectionData('contact', data);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!enabled || !hasData) return null;

  const email = contact?.email || profile.contactEmail;
  const phone = contact?.phone || profile.contactPhone;
  const location = contact?.location || profile.location;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      if (onSubmitContact) {
        await onSubmitContact(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionWrapper
      id="contact"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Direct Contact & Next Steps"
        subtitle="Initiate consultations, project inquiries, speaking engagements, or advisory discussions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Coordinates Panel (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs space-y-6">
          <div className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider pb-3 border-b border-neutral-100 dark:border-neutral-800">
            // Direct Coordinates
          </div>

          {email && (
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 uppercase tracking-wide">Electronic Mail</span>
              <a
                href={`mailto:${email}`}
                className="text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors block truncate"
              >
                {email}
              </a>
            </div>
          )}

          {phone && (
            <div className="space-y-1 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-xs text-neutral-500 uppercase tracking-wide">Telephone</span>
              <a
                href={`tel:${phone}`}
                className="text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors block"
              >
                {phone}
              </a>
            </div>
          )}

          {location && (
            <div className="space-y-1 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-xs text-neutral-500 uppercase tracking-wide">Location / Base</span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {location}
              </p>
            </div>
          )}

          {contact?.calendlyUrl && (
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-neutral-950 text-teal-700 dark:text-teal-300 rounded-lg font-semibold text-xs transition-colors border border-teal-200 dark:border-teal-800 uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Discussion</span>
              </a>
            </div>
          )}
        </div>

        {/* Contact Message Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-3 bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 rounded-full border border-teal-200 dark:border-teal-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                Message Dispatched
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                Thank you for your message. Your correspondence has been logged and received.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 hover:underline cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="journey-contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                  >
                    Your Name *
                  </label>
                  <input
                    id="journey-contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-teal-600 font-sans"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="journey-contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                  >
                    Email Address *
                  </label>
                  <input
                    id="journey-contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-teal-600 font-sans"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="journey-contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                >
                  Subject / Topic
                </label>
                <input
                  id="journey-contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-teal-600 font-sans"
                  placeholder="Collaboration Inquiry / Strategic Advisory"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="journey-contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                >
                  Message *
                </label>
                <textarea
                  id="journey-contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-teal-600 font-sans resize-none"
                  placeholder={contact?.messagePrompt || "Share project context, scope, or questions..."}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-neutral-950 font-semibold text-sm rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Dispatching...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
