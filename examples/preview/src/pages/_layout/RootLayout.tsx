import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<div className="min-h-screen bg-neutral-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
			<Header />
			<div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
				<div className="grid lg:grid-cols-[200px_1fr] gap-8">
					<Sidebar />
					{children}
				</div>
			</div>
		</div>
	);
}


