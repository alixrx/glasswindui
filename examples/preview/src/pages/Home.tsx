import React from 'react';
import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';

export default function Home(): JSX.Element {
	return (
		<main className="space-y-24">
			<Section id="installation" title="Installation">
				<div className="grid grid-cols-1 gap-6">
					<div className="rounded-xl border border-slate-300/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-6">
						<h3 className="text-base font-semibold mb-3">Install</h3>
						<p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Install Tailwind v4 and Glasswind UI.</p>
						<ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
							<li>Ensure Node 18+</li>
							<li>Add Tailwind v4, PostCSS plugin, and Glasswind UI</li>
						</ul>
						<CodeBlock>{`# pnpm
pnpm add -D tailwindcss @tailwindcss/postcss glasswindui

# npm
npm i -D tailwindcss @tailwindcss/postcss glasswindui

# yarn
yarn add -D tailwindcss @tailwindcss/postcss glasswindui`}</CodeBlock>
					</div>
					<div className="rounded-xl border border-slate-300/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-6">
						<h3 className="text-base font-semibold mb-3">Setup</h3>
						<p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Then set up PostCSS and import styles.</p>
						<ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
							<li>Create <code className="mx-1">src/index.css</code> and import layers</li>
							<li>Configure PostCSS to load Tailwind v4</li>
						</ul>
						<CodeBlock>{`/* src/index.css */
@import "tailwindcss";
@import "glasswindui/src/index.css";`}</CodeBlock>
					</div>
				</div>
			</Section>
		</main>
	);
}


