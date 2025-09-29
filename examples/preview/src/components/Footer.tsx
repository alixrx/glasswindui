import React from 'react';

export default function Footer(): JSX.Element {
	return (
		<footer className="py-4 px-6 mt-20">
			<div className="max-w-7xl mx-auto text-center">
				<div className="flex items-center justify-center gap-2 mb-4">
					<div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-xs">G</span>
					</div>
					<span className="text-slate-400 font-medium">Glasswind UI</span>
				</div>
			</div>
		</footer>
	);
}
