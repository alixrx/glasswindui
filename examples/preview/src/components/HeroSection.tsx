import React from 'react';

export default function HeroSection(): JSX.Element {
	return (
		<section className="relative py-12 px-6 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
			<div className="max-w-4xl mx-auto text-center relative z-10">
				<h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
					Liquid Glass
					<br />
					Components
				</h1>
				<p className="text-lg text-slate-600 dark:text-slate-400 mb-2 max-w-2xl mx-auto leading-relaxed">
					Beautiful, accessible components with liquid glass aesthetics. Built for Tailwind v4 with modern design principles.
				</p>
			</div>
		</section>
	);
}
