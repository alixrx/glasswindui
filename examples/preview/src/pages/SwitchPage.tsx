import React, { useMemo, useState } from 'react';
import Section from '@/components/Section';
import PreviewSurface from '@/components/PreviewSurface';
import Switch from '@/components/Switch';
import Tabs from '@/components/Tabs';
import CodeBlock from '@/components/CodeBlock';

function ClassTable(): JSX.Element {
    const items = useMemo(
        () => [
            { name: 'gw-switch', type: 'Component', desc: 'Toggle switch' },
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

export default function SwitchPage(): JSX.Element {
    const [on, setOn] = useState<boolean>(false);
    const [variant, setVariant] = useState<'gradient'>('gradient');
    const [tab, setTab] = useState<'preview' | 'html' | 'jsx'>('preview');
    return (
        <main className="space-y-16">
            <Section id="switch-classes" title="Switch">
                <ClassTable />
            </Section>
            <Section id="switch" title="Showcase">
                <Tabs tabs={[{id:'preview',label:'Preview'},{id:'html',label:'HTML'},{id:'jsx',label:'JSX'}]} selected={tab} onChange={(id)=>setTab(id as any)} className="mb-3" />
                {tab === 'preview' && (
                    <>
                        {/* Background selector removed: gradient-only */}
                        <PreviewSurface className="min-h-[160px] p-8">
                            <div className="flex items-center gap-2"><Switch checked={on} onChange={setOn} /></div>
                        </PreviewSurface>
                    </>
                )}
                {tab === 'html' && (
                    <CodeBlock>{`<input type="checkbox" class="gw-switch" />`}</CodeBlock>
                )}
                {tab === 'jsx' && (
                    <CodeBlock>{`<input type="checkbox" className="gw-switch" />`}</CodeBlock>
                )}
            </Section>
        </main>
    );
}


