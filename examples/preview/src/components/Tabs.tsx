import React from 'react';

interface TabDef { id: string; label: string; }

interface TabsProps {
	tabs: TabDef[];
	selected: string;
	onChange: (id: string) => void;
	className?: string;
}

export default function Tabs({ tabs, selected, onChange, className }: TabsProps): JSX.Element {
	return (
		<div className={className}>
			<div role="tablist" aria-label="Tabs" className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
				{tabs.map(t => {
					const active = selected === t.id;
					return (
                    <button
							key={t.id}
							role="tab"
							aria-selected={active}
							onClick={() => onChange(t.id)}
                        className={`px-3 py-2 text-sm rounded-t-md border-b-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors ${active ? 'border-sky-500 text-slate-900 dark:text-white' : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
						>
							{t.label}
						</button>
					);
				})}
			</div>
		</div>
	);
}


