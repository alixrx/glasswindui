import React from 'react';
import CardDemo from '@/components/CardDemo';

interface CardsShowcaseProps {
	gradientA?: string;
	gradientB?: string;
	showActionsSecond?: boolean;
}

export default function CardsShowcase({
	gradientA = 'radial-gradient(80% 80% at 0% 0%, rgba(255,255,255,.12), rgba(255,255,255,0) 60%)',
	gradientB = 'radial-gradient(80% 80% at 50% 100%, rgba(255,255,255,.12), rgba(255,255,255,0) 60%)',
	showActionsSecond = false,
}: CardsShowcaseProps): JSX.Element {
	return (
		<div className="grid gap-6 w-full p-8">
			<CardDemo
				title="Glass Card"
				description="Showcases body content and actions on a glass surface."
				gradient={gradientA}
			/>
		</div>
	);
}


