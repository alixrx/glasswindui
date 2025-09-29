import React, { useMemo, useState } from 'react';
import { Cog6ToothIcon, MagnifyingGlassIcon, PlayIcon } from '@heroicons/react/24/outline';
import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import PreviewSurface from '@/components/PreviewSurface';
import Tabs from '@/components/Tabs';

function ClassTable(): JSX.Element {
	const items = useMemo(
		() => [
			{ name: 'gw-btn-icon', type: 'Component', desc: 'Icon button' },
			{ name: 'gw-btn-icon-sm', type: 'Size', desc: 'small size' },
			{ name: 'gw-btn-icon-lg', type: 'Size', desc: 'large size' },
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

export default function IconButtonPage(): JSX.Element {
	return (
		<main className="space-y-16">
			<Section id="icon-button-classes" title="Icon Button">
				<ClassTable />
			</Section>
			<Section id="icon-button-preview" title="Showcase">
                <div className="space-y-10">
                    <Showcase title="Default" buttonClass="gw-btn-icon" />
                    <Showcase title="Small" buttonClass="gw-btn-icon gw-btn-icon-sm" />
                    <Showcase title="Large" buttonClass="gw-btn-icon gw-btn-icon-lg" />
                </div>
			</Section>
		</main>
	);
}

function Showcase({ title, buttonClass }: { title: string; buttonClass: string }): JSX.Element {
	const [tab, setTab] = useState<'preview' | 'html' | 'jsx'>('preview');
	const htmlCode = `<button class="${buttonClass}" aria-label="Settings">{svg}</button>`;
	const jsxCode = `<button className="${buttonClass}" aria-label="Settings">{svg}</button>`;
	return (
		<div>
			<h4 className="text-sm font-semibold mb-2">{title}</h4>
			<Tabs tabs={[{id:'preview',label:'Preview'},{id:'html',label:'HTML'},{id:'jsx',label:'JSX'}]} selected={tab} onChange={(id)=>setTab(id as any)} className="mb-3" />
            {tab === 'preview' && (
				<PreviewSurface className="min-h-[140px] p-8">
					<div className="flex items-center justify-center gap-6">
                        <button className={buttonClass} aria-label="Settings"><Cog6ToothIcon className="w-5 h-5" /></button>
                        <button className={buttonClass} aria-label="Settings"><MagnifyingGlassIcon className="w-5 h-5" /></button>
                        <button className={buttonClass} aria-label="Settings"><PlayIcon className="w-5 h-5" /></button>
					</div>
				</PreviewSurface>
			)}
			{tab === 'html' && (<CodeBlock>{htmlCode}</CodeBlock>)}
			{tab === 'jsx' && (<CodeBlock>{jsxCode}</CodeBlock>)}
		</div>
	);
}


