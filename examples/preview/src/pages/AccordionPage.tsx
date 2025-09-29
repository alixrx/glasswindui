import React, { useMemo, useState } from 'react';
import Section from '@/components/Section';
import Tabs from '@/components/Tabs';
import CodeBlock from '@/components/CodeBlock';
import PreviewSurface from '@/components/PreviewSurface';

function ClassTable(): JSX.Element {
  const items = useMemo(
    () => [
      { name: 'gw-accordion', type: 'Component', desc: 'Accordion container' },
      { name: 'gw-accordion-title', type: 'Part', desc: 'Clickable title row' },
      { name: 'gw-accordion-content', type: 'Part', desc: 'Collapsible content' },
      { name: 'gw-accordion-open', type: 'Modifier', desc: 'Force open state' },
      { name: 'gw-accordion-close', type: 'Modifier', desc: 'Force closed state' },
    ],
    []
  );
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 dark:bg-slate-900/50">
          <tr className="text-left">
            <th className="px-4 py-3">Class name</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.name} className="border-t border-slate-200/70 dark:border-slate-800/70">
              <td className="px-4 py-3 font-mono text-xs">{it.name}</td>
              <td className="px-4 py-3">{it.type}</td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{it.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Showcase(): JSX.Element {
  const [tab, setTab] = useState<'preview' | 'html' | 'jsx'>('preview');
  const htmlCode = `<div class=\"gw-accordion\">\n  <input id=\"a1\" type=\"checkbox\" />\n  <label for=\"a1\" class=\"gw-accordion-title\">What is Glasswind UI?</label>\n  <div class=\"gw-accordion-content\">\n    A small Tailwind-first design system with Liquid Glass aesthetics.\n  </div>\n</div>`;
  const jsxCode = `<div className=\"gw-accordion\">\n  <input id=\"a1\" type=\"checkbox\" />\n  <label htmlFor=\"a1\" className=\"gw-accordion-title\">What is Glasswind UI?</label>\n  <div className=\"gw-accordion-content\">\n    A small Tailwind-first design system with Liquid Glass aesthetics.\n  </div>\n</div>`;
  return (
    <div>
      <Tabs tabs={[{id:'preview',label:'Preview'},{id:'html',label:'HTML'},{id:'jsx',label:'JSX'}]} selected={tab} onChange={(id)=>setTab(id as any)} className="mb-3" />
      {tab === 'preview' && (
        <PreviewSurface className="min-h-[160px] p-8 flex items-start justify-center">
          <div className="w-full max-w-xl">
            <div className="gw-accordion">
              <input id="demo-accordion" type="checkbox" />
              <label htmlFor="demo-accordion" className="gw-accordion-title">What is Glasswind UI?</label>
              <div className="gw-accordion-content">
                A small Tailwind-first design system with Liquid Glass aesthetics.
              </div>
            </div>
          </div>
        </PreviewSurface>
      )}
      {tab === 'html' && (<CodeBlock>{htmlCode}</CodeBlock>)}
      {tab === 'jsx' && (<CodeBlock>{jsxCode}</CodeBlock>)}
    </div>
  );
}

function DefaultOpenShowcase(): JSX.Element {
  const [tab, setTab] = useState<'preview' | 'html' | 'jsx'>('preview');
  const htmlCode = `<div class=\"gw-accordion\">\n  <input id=\"a2\" type=\"checkbox\" checked />\n  <label for=\"a2\" class=\"gw-accordion-title\">Default open (closable)</label>\n  <div class=\"gw-accordion-content\">\n    This panel is open by default using the checkbox’s \`checked\` (or \`defaultChecked\` in JSX). It can be closed.\n  </div>\n</div>`;
  const jsxCode = `<div className=\"gw-accordion\">\n  <input id=\"a2\" type=\"checkbox\" defaultChecked />\n  <label htmlFor=\"a2\" className=\"gw-accordion-title\">Default open (closable)</label>\n  <div className=\"gw-accordion-content\">\n    This panel is open by default using the checkbox’s \`defaultChecked\`. It can be closed.\n  </div>\n</div>`;
  return (
    <div>
      <Tabs tabs={[{id:'preview',label:'Preview'},{id:'html',label:'HTML'},{id:'jsx',label:'JSX'}]} selected={tab} onChange={(id)=>setTab(id as any)} className="mb-3" />
      {tab === 'preview' && (
        <PreviewSurface className="min-h-[140px] p-8 flex items-start justify-center">
          <div className="w-full max-w-xl">
            <div className="gw-accordion">
              <input id="demo-accordion-open" type="checkbox" defaultChecked />
              <label htmlFor="demo-accordion-open" className="gw-accordion-title">Default open (closable)</label>
              <div className="gw-accordion-content">
                This panel is open by default using the checkbox’s defaultChecked. It can be closed by clicking the title.
              </div>
            </div>
          </div>
        </PreviewSurface>
      )}
      {tab === 'html' && (<CodeBlock>{htmlCode}</CodeBlock>)}
      {tab === 'jsx' && (<CodeBlock>{jsxCode}</CodeBlock>)}
    </div>
  );
}

export default function AccordionPage(): JSX.Element {
  return (
    <main className="space-y-16">
      <Section id="accordion-classes" title="Accordion">
        <ClassTable />
      </Section>
      <Section id="accordion-showcase" title="Showcase">
        <Showcase />
        <DefaultOpenShowcase />
      </Section>
    </main>
  ); 
}


