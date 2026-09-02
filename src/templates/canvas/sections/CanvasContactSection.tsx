/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasContactSection - Asymmetric studio contact terminal and direct correspondence
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, Send, CheckCircle } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasContactSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
  onSubmitContact?: (data: { name: string; email: string; subject?: string; message: string }) => Promise<boolean> | boolean;
}

export const CanvasContactSection: React.FC<CanvasContactSectionProps> = ({
  data,
  enabled,
  sectionNumber = '11',
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
  const phone = contact?.phone;
  const location = contact?.address || profile.location;

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
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Direct Studio Inquiries"
        subtitle="Initiate advisory consultations, project commissions, or speaking engagements."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Coordinates Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">
              <span>COMMUNICATION CHANNELS</span>
              <span>// DIRECT</span>
            </div>

            {email && (
              <div className="space-y-1">
                <div className="text-neutral-400 uppercase tracking-widest text-[10px]">
                  Electronic Mail
                </div>
                <a
                  href={`mailto:${email}`}
                  className="font-sans text-base font-bold text-neutral-900 dark:text-neutral-100 hover:text-orange-600 transition-colors block truncate"
                >
                  {email}
                </a>
              </div>
            )}

            {phone && (
              <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-neutral-400 uppercase tracking-widest text-[10px]">
                  Telephone / Voice
                </div>
                <a
                  href={`tel:${phone}`}
                  className="font-sans text-base font-bold text-neutral-900 dark:text-neutral-100 hover:text-orange-600 transition-colors block"
                >
                  {phone}
                </a>
              </div>
            )}

            {location && (
              <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-neutral-400 uppercase tracking-widest text-[10px]">
                  Studio Location
                </div>
                <div className="font-sans text-sm text-neutral-700 dark:text-neutral-300">
                  {location}
                </div>
              </div>
            )}

            {(profile.statusBadge || profile.availableForHire) && (
              <div className="space-y-1 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-neutral-400 uppercase tracking-widest text-[10px]">
                  Current Availability
                </div>
                <div className="font-sans text-sm text-orange-600 dark:text-orange-400 font-bold">
                  {profile.statusBadge || 'Available for collaboration'}
                </div>
              </div>
            )}

            {contact?.calendlyUrl && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 text-neutral-900 dark:text-neutral-100 rounded-md font-bold uppercase tracking-wider text-xs transition-colors border border-neutral-300 dark:border-neutral-700"
                >
                  <Calendar className="w-4 h-4 text-orange-600 group-hover:text-white" />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Inquiry Transmission Form (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-10 bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-3 bg-orange-600/10 text-orange-600 rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-50">
                Transmission Received
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                Thank you for your dispatch. I have received your message and will respond promptly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="canvas-contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                  >
                    Your Name *
                  </label>
                  <input
                    id="canvas-contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-orange-600 font-sans"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="canvas-contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                  >
                    Email Address *
                  </label>
                  <input
                    id="canvas-contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-orange-600 font-sans"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="canvas-contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                >
                  Subject / Topic
                </label>
                <input
                  id="canvas-contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-orange-600 font-sans"
                  placeholder="Strategic Engagement / Project Inquiry"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="canvas-contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                >
                  Message *
                </label>
                <textarea
                  id="canvas-contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-orange-600 font-sans resize-none"
                  placeholder="Outline project parameters, objectives, timelines, or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-[3px_3px_0px_0px_rgba(28,25,23,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Transmitting...' : 'Dispatch Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
