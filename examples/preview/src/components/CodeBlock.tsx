import React, { PropsWithChildren, useRef } from 'react';

interface CodeBlockProps extends PropsWithChildren {}

export default function CodeBlock({ children }: CodeBlockProps): JSX.Element {
    const codeRef = useRef<HTMLElement | null>(null);
	return (
		<div className="relative group my-6 max-w-full">
			<div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/50">
					<div className="flex items-center gap-2">
						<div className="flex gap-1.5 text-sky-400">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12" r="2" fill="currentColor" />
								<g fill="none" stroke="currentColor" strokeWidth="1.3">
									<ellipse cx="12" cy="12" rx="10" ry="4.5" />
									<ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
									<ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
								</g>
							</svg>
						</div>
						<span className="text-slate-400 text-sm font-medium ml-2">Code</span>
					</div>
				</div>
				<pre className="p-6 overflow-x-auto font-mono text-sm text-slate-300 leading-relaxed">
					<code ref={codeRef} className="whitespace-pre">{children}</code>
				</pre>
			</div>
		</div>
	);
}


