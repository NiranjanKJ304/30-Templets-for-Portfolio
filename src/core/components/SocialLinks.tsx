/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SocialLinks - Dynamic universal social icons & buttons component
 */

import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Globe,
  Figma,
  Code2,
  FileText,
  MessageSquare,
  Share2,
  BookOpen,
} from 'lucide-react';
import type { SocialLink } from '../types/portfolio';
import { cn } from '../utils/cn';

export interface SocialLinksProps {
  socials?: SocialLink[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  iconSize?: number;
  variant?: 'icons-only' | 'pills' | 'minimal' | 'underline' | 'buttons';
  showLabels?: boolean;
  align?: 'left' | 'center' | 'right' | 'between';
}

function getPlatformIcon(platform: string) {
  const p = platform.toLowerCase().trim();
  switch (p) {
    case 'github':
      return Github;
    case 'linkedin':
      return Linkedin;
    case 'twitter':
    case 'x':
      return Twitter;
    case 'instagram':
      return Instagram;
    case 'youtube':
      return Youtube;
    case 'email':
    case 'mail':
      return Mail;
    case 'figma':
      return Figma;
    case 'codepen':
      return Code2;
    case 'medium':
    case 'substack':
      return BookOpen;
    case 'resume':
    case 'cv':
      return FileText;
    case 'discord':
      return MessageSquare;
    case 'website':
    case 'portfolio':
    case 'blog':
      return Globe;
    default:
      return Share2;
  }
}

function formatPlatformLabel(link: SocialLink): string {
  if (link.label) return link.label;
  if (link.username) return `${link.platform}: @${link.username}`;
  return link.platform.charAt(0).toUpperCase() + link.platform.slice(1);
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  socials,
  className = '',
  itemClassName = '',
  iconClassName = '',
  iconSize = 18,
  variant = 'icons-only',
  showLabels = false,
  align = 'left',
}) => {
  if (!socials || socials.length === 0) {
    return null;
  }

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between',
  }[align];

  return (
    <nav
      aria-label="Social and professional links"
      className={cn('flex flex-wrap items-center gap-3', alignClasses, className)}
    >
      {socials.map((link, index) => {
        const Icon = getPlatformIcon(link.platform);
        const label = formatPlatformLabel(link);
        const isEmail = link.platform.toLowerCase() === 'email' && !link.url.startsWith('mailto:');
        const href = isEmail ? `mailto:${link.url}` : link.url;

        if (variant === 'pills') {
          return (
            <a
              key={`${link.platform}-${index}`}
              href={href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              className={cn(
                'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
                itemClassName
              )}
              aria-label={label}
            >
              <Icon size={iconSize} className={cn('shrink-0', iconClassName)} />
              <span>{label}</span>
            </a>
          );
        }

        if (variant === 'buttons') {
          return (
            <a
              key={`${link.platform}-${index}`}
              href={href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
                itemClassName
              )}
              aria-label={label}
            >
              <Icon size={iconSize} className={cn('shrink-0', iconClassName)} />
              {(showLabels || link.label) && <span>{label}</span>}
            </a>
          );
        }

        return (
          <a
            key={`${link.platform}-${index}`}
            href={href}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            className={cn(
              'inline-flex items-center gap-2 p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
              itemClassName
            )}
            aria-label={label}
            title={label}
          >
            <Icon size={iconSize} className={cn('shrink-0', iconClassName)} />
            {showLabels && <span className="text-sm font-medium">{label}</span>}
          </a>
        );
      })}
    </nav>
  );
};
