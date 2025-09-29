import React, { PropsWithChildren } from 'react';

type DemoRowProps = PropsWithChildren<{ title: string }>;

export default function DemoRow({ title, children }: DemoRowProps): JSX.Element {
	return (
		<div className="flex my-2 flex-col items-center justify-center rounded-2xl p-8 min-h-[120px]">
			{/* <h3 className="text-lg font-semibold text-slate-200">{title}</h3> */}
			<div className="flex items-center justify-center gap-4">
				{children}
			</div>
		</div>
	);
}


