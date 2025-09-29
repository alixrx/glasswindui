import React, { useMemo, useState } from 'react';
import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import PreviewSurface from '@/components/PreviewSurface';
import Tabs from '@/components/Tabs';

function ClassTable(): JSX.Element {
	const items = useMemo(
		() => [
			{ name: 'gw-btn', type: 'Component', desc: 'Button' },
			{ name: 'gw-btn-sm', type: 'Size', desc: 'small size' },
			{ name: 'gw-btn-lg', type: 'Size', desc: 'large size' },
			{ name: 'gw-btn-disabled', type: 'State', desc: 'disabled state' },
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

function Showcase({ title, buttonClass, disabled = false }: { title: string; buttonClass: string; disabled?: boolean }): JSX.Element {
    const [tab, setTab] = useState<'preview' | 'html' | 'jsx'>('preview');
    const htmlCode = disabled ? `<button class="${buttonClass}" disabled>Liquid Glass</button>` : `<button class="${buttonClass}">Liquid Glass</button>`;
    const jsxCode = disabled ? `<button className="${buttonClass}" disabled>Liquid Glass</button>` : `<button className="${buttonClass}">Liquid Glass</button>`;
    return (
        <div>
            <h4 className="text-sm font-semibold mb-2">{title}</h4>
            <Tabs tabs={[{id:'preview',label:'Preview'},{id:'html',label:'HTML'},{id:'jsx',label:'JSX'}]} selected={tab} onChange={(id)=>setTab(id as any)} className="mb-3" />
            {tab === 'preview' && (
                <PreviewSurface className="min-h-[140px] p-8">
                    <div className="flex items-center justify-center">
                        <button className={buttonClass} disabled={disabled}>Liquid Glass</button>
                    </div>
                </PreviewSurface>
            )}
            {tab === 'html' && (<CodeBlock>{htmlCode}</CodeBlock>)}
            {tab === 'jsx' && (<CodeBlock>{jsxCode}</CodeBlock>)}
        </div>
    );
}

export default function ButtonPage(): JSX.Element {
    return (
		<main className="space-y-16">
			<Section id="button-classes" title="Button">
				<ClassTable />
			</Section>
            <Section id="button-preview" title="Showcase">
                <div className="space-y-10">
                    <Showcase title="Size: Large" buttonClass="gw-btn gw-btn-lg" />
                    <Showcase title="Size: Medium" buttonClass="gw-btn" />
                    <Showcase title="Size: Small" buttonClass="gw-btn gw-btn-sm" />
                    <Showcase title="Disabled" buttonClass="gw-btn gw-btn-disabled" disabled />
                </div>
            </Section>
		</main>
	);
}


