import React, { useEffect, useState } from 'react';

export default function ThemeToggle(): JSX.Element {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const html = document.documentElement;
		html.classList.toggle('dark', isDark);
	if (isDark) {
		html.setAttribute('data-theme', 'dark');
	} else {
		html.setAttribute('data-theme', 'light');
	}
	}, [isDark]);

	return (
		<button
			className="p-2.5 rounded-lg transition-colors cursor-pointer border hover:bg-slate-100 dark:hover:bg-slate-800/50 border-slate-300 dark:border-slate-700/50"
			title="Toggle theme"
			aria-label="Toggle theme"
			onClick={() => setIsDark(v => !v)}
		>
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				{isDark ? (
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
				) : (
					<>
						<path d="M12 4V2M12 22v-2M4.93 4.93 3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2m20 0h-2M4.93 19.07 3.51 20.49M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
					</>
				)}
			</svg>
		</button>
	);
}


