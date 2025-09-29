import React from 'react';

interface CardDemoProps {
	title: string;
	description: string;
	gradient: string;
	showActions?: boolean;
}

export default function CardDemo({ title, description, gradient, showActions = true }: CardDemoProps): JSX.Element {
	// Map common gradients to Tailwind classes
    const getGradientClass = (gradient: string) => {
        if (gradient.includes('0% 0%')) return '';
        if (gradient.includes('100% 0%')) return '';
        if (gradient.includes('50% 100%')) return '';
        return '';
    };

	return (
        <div className={`gw-card ${getGradientClass(gradient)}`} tabIndex={0} aria-label={title}>
			<div className="flex flex-col gap-4">
				<h3 className="gw-card-title">{title}</h3>
				<p>{description}</p>
				{showActions && (
					<div className="flex gap-3">
						<button className="gw-btn gw-btn-sm">Action</button>
						<button className="gw-btn gw-btn-sm gw-btn-disabled">Disabled</button>
					</div>
				)}
			</div>
		</div>
	);
}
