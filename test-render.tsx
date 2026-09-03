import React from 'react';
import { renderToString } from 'react-dom/server';
import { getTemplate } from './src/core/registry/templateRegistry';
import './src/templates/index';

const mockData = {
  profile: {
    name: 'John Doe',
    role: 'Engineer',
    bio: 'Test bio',
    summary: 'Test summary'
  },
  sections: [],
  skills: [{ name: 'Frontend', items: [{ name: 'React', level: 'Expert' }] }],
  projects: [{ id: '1', title: 'Test Project' }],
  experience: [{ role: 'Dev', company: 'Tech', startDate: '2020', current: true }],
  education: [{ institution: 'University', degree: 'BS' }],
  contact: { email: 'test@example.com' }
};

const templatesToTest = ['collage-01', 'blueprint-01', 'paperfold-01', 'monochrome-01', 'orbital-01'];

templatesToTest.forEach(id => {
  try {
    const templateDef = getTemplate(id);
    if (!templateDef) {
      console.error(`[${id}] Template not found in registry`);
      return;
    }
    const Component = templateDef.component;
    
    // Attempt render
    renderToString(<Component data={mockData as any} sectionsConfig={[]} />);
    console.log(`[${id}] PASS: Successfully rendered to string`);
  } catch (err: any) {
    console.error(`[${id}] FAIL: Runtime error during render:`);
    console.error(err.stack || err.message || err);
  }
});
