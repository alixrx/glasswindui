import React from 'react';
import Section from '@/components/Section';
import CodeBlock from '@/components/CodeBlock';
import { Link } from '@tanstack/react-router';

export default function Introduction(): JSX.Element {
	return (
		<main className="space-y-16">
			<Section id="introduction" title="Introduction">
				<div className="flex flex-col prose prose-slate dark:prose-invert max-w-none gap-8">
					<div className="space-y-2">
						<h3 className="text-xl font-bold">Tailwind</h3>
						<p>
							<strong>Glasswind UI</strong> is built on Tailwind v4. It ships composable utility
							tokens and small components so you can assemble interfaces quickly while staying
							in the Tailwind workflow. We prefer utilities via <code>@apply</code> and only use
							plain CSS for effects Tailwind doesn’t natively cover.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-bold">Liquid Glass</h3>
						<p>
							Our look and feel embraces a "Liquid Glass" style: soft translucency, gentle inner
							light, and layered depth. The result is tactile yet minimal, with first‑class
							dark and light theme support so components feel natural in either mode.
						</p>
					<div className="mt-12">
						<Link to="/installation" className="gw-btn">Go to Installation</Link>
					</div>
					</div>
				</div>
			</Section>
		</main>
	);
}


