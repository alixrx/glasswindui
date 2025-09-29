import React, { useMemo } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';

export default function Sidebar(): JSX.Element {
    const docs = useMemo(
        () => [
            { to: '/', label: 'Introduction' },
            { to: '/installation', label: 'Installation' },
        ],
        []
    );
    const components = useMemo(
        () => [
            { to: '/button', label: 'Button' },
            { to: '/icon-button', label: 'IconButton' },
            { to: '/switch', label: 'Switch' },
            { to: '/checkbox', label: 'Checkbox' },
            { to: '/badge', label: 'Badge' },
            { to: '/accordion', label: 'Accordion' },
            { to: '/cards', label: 'Cards' },
        ],
        []
    );
    const { location } = useRouterState();
	return (
		<aside className="hidden lg:block sticky top-24 self-start">
			<nav>
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Docs</h3>
                <ul className="space-y-1 mb-5">
                    {docs.map(item => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={`group flex items-center gap-2 py-1 text-sm ${location.href.endsWith(item.to) ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}
                            >
                                <span className={`inline-block w-1 h-4 rounded transition-opacity ${location.href.endsWith(item.to) ? 'bg-neutral-800 dark:bg-neutral-300 opacity-100' : 'opacity-0 group-hover:opacity-40 bg-neutral-800 dark:bg-neutral-300'}`}/>
                                <span className="hover:underline">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Components</h3>
                <ul className="space-y-1">
                    {components.map(item => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={`group flex items-center gap-2 py-1 text-sm ${location.href.endsWith(item.to) ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}
                            >
                                <span className={`inline-block w-1 h-4 rounded transition-opacity ${location.href.endsWith(item.to) ? 'bg-neutral-800 dark:bg-neutral-300 opacity-100' : 'opacity-0 group-hover:opacity-40 bg-neutral-800 dark:bg-neutral-300'}`}/>
                                <span className="hover:underline">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
			</nav>
		</aside>
	);
}


