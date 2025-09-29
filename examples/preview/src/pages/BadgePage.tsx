import React, { useMemo, useState } from 'react';
import Section from '@/components/Section';
import Tabs from '@/components/Tabs';
import CodeBlock from '@/components/CodeBlock';
import PreviewSurface from '@/components/PreviewSurface';
import { CheckIcon } from '@heroicons/react/24/outline';

function ClassTable(): JSX.Element {
  const items = useMemo(
    () => [
      { name: 'gw-badge', type: 'Component', desc: 'Badge' },
      { name: 'gw-badge-sm', type: 'Size', desc: 'small size' },
      { name: 'gw-badge-lg', type: 'Size', desc: 'large size' },
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

function Showcase({ title, classes, withIcon = false }: { title: string; classes: string; withIcon?: boolean }): JSX.Element {
  const [tab, setTab] = useState<'preview' | 'html' | 'jsx'>('preview');
  const htmlCode = `<span class=\"${classes}\">Badge</span>`;
  const jsxCode = `<span className=\"${classes}\">Badge</span>`;
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">{title}</h4>
      <Tabs tabs={[{id:'preview',label:'Preview'},{id:'html',label:'HTML'},{id:'jsx',label:'JSX'}]} selected={tab} onChange={(id)=>setTab(id as any)} className="mb-3" />
      {tab === 'preview' && (
        <PreviewSurface className="min-h-[120px] p-8">
          <div className="flex items-center justify-center gap-3">
            <span className={classes}>
            {withIcon && (
              <CheckIcon className="w-5 h-5" />
            )}Badge</span>
          </div>
        </PreviewSurface>
      )}
      {tab === 'html' && (<CodeBlock>{htmlCode}</CodeBlock>)}
      {tab === 'jsx' && (<CodeBlock>{jsxCode}</CodeBlock>)}
    </div>
  );
}

export default function BadgePage(): JSX.Element {
  return (
    <main className="space-y-16">
      <Section id="badge-classes" title="Badge">
        <ClassTable />
      </Section>
      <Section id="badge-showcase" title="Showcase">
        <div className="space-y-10">
          <Showcase title="Small" classes="gw-badge gw-badge-sm" />
          <Showcase title="Default" classes="gw-badge" />
          <Showcase title="Large" classes="gw-badge gw-badge-lg" />
          <Showcase title="With icon" classes="gw-badge" withIcon />
        </div>
      </Section>
    </main>
  );
}


