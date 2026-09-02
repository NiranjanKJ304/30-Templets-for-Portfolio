/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalContactSection - Direct dialogue & inquiries
 */

import React, { useState } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

interface BotanicalContactSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BotanicalContactSection: React.FC<BotanicalContactSectionProps> = ({
  data,
  enabled = true,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  if (!enabled) return null;

  const email = data.contact?.email || data.profile.contactEmail;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Information Column */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              11 / Initiate Dialogue
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal leading-snug mb-6">
              Let us cultivate something memorable together.
            </h2>
            <p className="text-sm sm:text-base text-[#586359] dark:text-[#9BB0A0] leading-relaxed mb-8 font-sans">
              Whether exploring a strategic collaboration, advisory inquiry, or discussing creative horizons, my inbox is open for meaningful conversation.
            </p>

            {email && (
              <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] inline-block mb-6">
                <span className="text-[10px] uppercase font-mono text-[#586359] dark:text-[#9BB0A0] block mb-1">
                  Direct Correspondence:
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-serif text-lg font-medium text-[#243828] dark:text-[#8EB697] hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {email}
                </a>
              </div>
            )}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] shadow-sm">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C261E] dark:text-[#F0F5F1] font-medium mb-2">
                    Message Received with Gratitude
                  </h3>
                  <p className="text-sm text-[#586359] dark:text-[#9BB0A0] max-w-sm mx-auto font-sans">
                    Thank you for reaching out. I will respond to your correspondence promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="botanical-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#586359] dark:text-[#9BB0A0] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="botanical-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F5F0] dark:bg-[#202E24] border border-[#D8D4C8] dark:border-[#2C3E30] text-sm text-[#1C261E] dark:text-[#F0F5F1] focus:outline-none focus:border-[#243828] dark:focus:border-[#8EB697]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="botanical-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#586359] dark:text-[#9BB0A0] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="botanical-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F5F0] dark:bg-[#202E24] border border-[#D8D4C8] dark:border-[#2C3E30] text-sm text-[#1C261E] dark:text-[#F0F5F1] focus:outline-none focus:border-[#243828] dark:focus:border-[#8EB697]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="botanical-message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#586359] dark:text-[#9BB0A0] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="botanical-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your initiative, vision, or query..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F5F0] dark:bg-[#202E24] border border-[#D8D4C8] dark:border-[#2C3E30] text-sm text-[#1C261E] dark:text-[#F0F5F1] focus:outline-none focus:border-[#243828] dark:focus:border-[#8EB697] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-sm font-medium bg-[#243828] dark:bg-[#EBF2EC] text-[#F6F5F0] dark:text-[#101712] hover:bg-[#1B2C1F] dark:hover:bg-[#DCE8DE] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
