import React, { PropsWithChildren } from 'react';

type InfoCardProps = PropsWithChildren<{ title: string; className?: string }>;

export default function InfoCard({ title, className, children }: InfoCardProps): JSX.Element {
	return (
		<div className={[
			'rounded-2xl border border-slate-300/70 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-6',
			className
		].filter(Boolean).join(' ')}>
			<h3 className="text-base font-semibold mb-3">{title}</h3>
			{children}
		</div>
	);
}


