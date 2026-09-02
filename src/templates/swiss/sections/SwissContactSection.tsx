/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissContactSection - Systematic contact & coordinates register
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
  onSubmitContact?: (data: { name: string; email: string; subject?: string; message: string }) => Promise<boolean> | boolean;
}

export const SwissContactSection: React.FC<SwissContactSectionProps> = ({
  data,
  enabled,
  indexNumber = '11',
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
      className="py-16 sm:py-24"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Direct Contact & Coordinates"
        subtitle="Initiate consultations, project inquiries, speaking engagements, or strategic appointments."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Coordinates Panel (Cols 1-5) */}
        <div className="lg:col-span-5 border border-neutral-900 dark:border-neutral-100 p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 space-y-6 font-mono text-xs">
          <div className="text-red-600 dark:text-red-500 font-bold uppercase tracking-widest pb-3 border-b border-neutral-200 dark:border-neutral-800">
            // DIRECT COORDINATES
          </div>

          {email && (
            <div className="space-y-1">
              <span className="text-neutral-500 uppercase">ELECTRONIC MAIL:</span>
              <a
                href={`mailto:${email}`}
                className="text-sm font-bold text-neutral-950 dark:text-neutral-50 hover:text-red-600 dark:hover:text-red-500 block truncate"
              >
                {email}
              </a>
            </div>
          )}

          {phone && (
            <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-neutral-500 uppercase">TELEPHONE:</span>
              <a
                href={`tel:${phone}`}
                className="text-sm font-bold text-neutral-950 dark:text-neutral-50 hover:text-red-600 dark:hover:text-red-500 block"
              >
                {phone}
              </a>
            </div>
          )}

          {location && (
            <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-neutral-500 uppercase">BASE / LOCATION:</span>
              <div className="text-sm font-bold text-neutral-950 dark:text-neutral-50">
                {location}
              </div>
            </div>
          )}

          {contact?.calendlyUrl && (
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href={contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-neutral-950 dark:bg-neutral-50 hover:bg-red-600 dark:hover:bg-red-500 text-white dark:text-neutral-950 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-neutral-950 dark:border-neutral-50"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Discussion</span>
              </a>
            </div>
          )}
        </div>

        {/* Dispatch Message Form (Cols 6-12) */}
        <div className="lg:col-span-7 border border-neutral-900 dark:border-neutral-100 p-6 sm:p-8 bg-white dark:bg-neutral-950">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 text-red-600 dark:text-red-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                Transmission Dispatched
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-md mx-auto leading-relaxed">
                Thank you for your correspondence. Your message has been logged and received.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:underline cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="swiss-contact-name"
                    className="block font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
                  >
                    Your Name *
                  </label>
                  <input
                    id="swiss-contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 font-sans text-sm"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="swiss-contact-email"
                    className="block font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
                  >
                    Email Address *
                  </label>
                  <input
                    id="swiss-contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 font-sans text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="swiss-contact-subject"
                  className="block font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
                >
                  Topic / Subject
                </label>
                <input
                  id="swiss-contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 font-sans text-sm"
                  placeholder="Strategic Advisory / Project Inquiry"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="swiss-contact-message"
                  className="block font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
                >
                  Message *
                </label>
                <textarea
                  id="swiss-contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 font-sans text-sm resize-none"
                  placeholder={contact?.messagePrompt || "Share project context, scope, or questions..."}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 bg-neutral-950 dark:bg-neutral-50 hover:bg-red-600 dark:hover:bg-red-500 hover:text-white dark:hover:text-white text-white dark:text-neutral-950 font-mono font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-neutral-950 dark:border-neutral-50"
              >
                <span>{status === 'submitting' ? 'Dispatching...' : 'Dispatch Message'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
