/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Universal Portfolio Template Registry
 * Central single-source-of-truth registry for all 35+ templates.
 */

import type { TemplateDefinition } from '../types/template';

class TemplateRegistry {
  private templates: Map<string, TemplateDefinition> = new Map();

  /**
   * Registers a new portfolio template into the laboratory.
   */
  public register(template: TemplateDefinition): void {
    if (this.templates.has(template.config.id)) {
      console.warn(`[TemplateRegistry] Overwriting existing template registration for ID: ${template.config.id}`);
    }
    this.templates.set(template.config.id, template);
  }

  /**
   * Retrieves a template definition by its unique ID.
   */
  public get(id: string): TemplateDefinition | undefined {
    return this.templates.get(id);
  }

  /**
   * Returns an array of all registered templates.
   */
  public getAll(): TemplateDefinition[] {
    return Array.from(this.templates.values());
  }

  /**
   * Returns list of all registered template IDs.
   */
  public getIds(): string[] {
    return Array.from(this.templates.keys());
  }

  /**
   * Checks if a template exists with the given ID.
   */
  public has(id: string): boolean {
    return this.templates.has(id);
  }

  /**
   * Total count of registered templates.
   */
  public get count(): number {
    return this.templates.size;
  }
}

export const templateRegistry = new TemplateRegistry();

// Export convenience helper functions
export function registerTemplate(template: TemplateDefinition): void {
  templateRegistry.register(template);
}

export function getTemplate(id: string): TemplateDefinition | undefined {
  return templateRegistry.get(id);
}

export function getAllTemplates(): TemplateDefinition[] {
  return templateRegistry.getAll();
}

export function getTemplateIds(): string[] {
  return templateRegistry.getIds();
}

export function hasTemplate(id: string): boolean {
  return templateRegistry.has(id);
}
