import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { Link } from '@tanstack/react-router';
import logoUrl from '@/assets/glasswindlogo.png';

export default function Header(): JSX.Element {
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-slate-950 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/50 shadow-sm">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<nav className="flex items-center justify-between">
					<Link to="/" className="flex items-center gap-3 cursor-pointer">
						<img src={logoUrl} alt="Glasswind UI" className="w-8 h-8" />
						<span className="text-xl font-semibold bg-clip-text">Glasswind UI</span>
					</Link>
					<div className="flex items-center gap-2">
						<ThemeToggle />
						<a 
							href="https://github.com/alixrx/glasswindui" 
							target="_blank" 
							rel="noreferrer" 
							aria-label="GitHub" 
							className="p-2.5 rounded-lg transition-colors border hover:bg-slate-100 dark:hover:bg-slate-800/50 border-slate-300 dark:border-slate-700/50"
						>
							<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.54 0-.27-.01-1.17-.02-2.12-3.06.66-3.71-1.3-3.71-1.3-.5-1.29-1.21-1.63-1.21-1.63-.99-.67.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.39-1.2.71-1.48-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.42.11-2.97 0 0 .92-.29 3.01 1.13.87-.24 1.81-.36 2.74-.36.93 0 1.87.12 2.74.36 2.09-1.42 3.01-1.13 3.01-1.13.6 1.55.22 2.69.11 2.97.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.43.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.64.75.53 4.37-1.45 7.51-5.57 7.51-10.43C23.02 5.25 18.27.5 12 .5Z"/>
							</svg>
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}


