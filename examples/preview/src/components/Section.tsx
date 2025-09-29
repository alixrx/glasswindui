import React, { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{ id: string; title: string }>;

export default function Section({ id, title, children }: SectionProps): JSX.Element {
	return (
		<section id={id} className="scroll-mt-24">
			<div className="flex items-center gap-3 mb-8">
				<div className="w-1 h-8 rounded-full bg-neutral-800 dark:bg-neutral-300"></div>
				<h2 className="text-3xl font-bold">
					{title}
				</h2>
			</div>
			<div className="space-y-8">
				{children}
			</div>
		</section>
	);
}


