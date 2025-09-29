import React from 'react';
import DemoRow from '@/components/DemoRow';

export default function ButtonsShowcase(): JSX.Element {
	return (
		<div className="flex flex-col gap-4 items-center">
			<DemoRow title="Size: Large">
				<button className="gw-btn gw-btn-lg">Liquid Glass</button>
			</DemoRow>
			<DemoRow title="Size: Medium">
				<button className="gw-btn">Liquid Glass</button>
			</DemoRow>
			<DemoRow title="Size: Small">
				<button className="gw-btn gw-btn-sm">Liquid Glass</button>
			</DemoRow>
			<DemoRow title="Icon Buttons">
				<button className="gw-btn-icon" aria-label="Settings">
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.6"/>
						<path d="M19.4 13.5a7.8 7.8 0 0 0 .1-3l2-1.2-2-3.4-2.2 1a7.7 7.7 0 0 0-2.6-1.5l-.3-2.4h-4l-.3 2.4a7.7 7.7 0 0 0-2.6 1.5l-2.2-1-2 3.4 2 1.2a7.8 7.8 0 0 0 .1 3l-2 1.2 2 3.4 2.2-1a7.7 7.7 0 0 0 2.6 1.5l.3 2.4h4l.3-2.4a7.7 7.7 0 0 0 2.6-1.5l2.2 1 2-3.4-2-1.2Z" stroke="currentColor" strokeWidth="1.2"/>
					</svg>
				</button>
				<button className="gw-btn-icon gw-btn-icon-sm" aria-label="Search">
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6"/>
						<path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
					</svg>
				</button>
				<button className="gw-btn-icon gw-btn-icon-lg" aria-label="Play">
					<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 6v12l10-6-10-6Z" />
					</svg>
				</button>
			</DemoRow>
		</div>
	);
}


