import React from 'react';
import PreviewSurface from '@/components/PreviewSurface';

type SurfaceVariant = 'image' | 'gradient';

interface TwoUpPreviewsProps {
	left: React.ReactNode;
	right: React.ReactNode;
	leftVariant?: SurfaceVariant;
	rightVariant?: SurfaceVariant;
	leftClassName?: string;
	rightClassName?: string;
	className?: string;
}

export default function TwoUpPreviews({
	left,
	right,
	leftVariant = 'image',
	rightVariant = 'gradient',
	leftClassName,
	rightClassName,
	className,
}: TwoUpPreviewsProps): JSX.Element {
	return (
		<div className={className ?? 'grid grid-cols-1 gap-6'}>
			<PreviewSurface variant={leftVariant} className={leftClassName}>
				{left}
			</PreviewSurface>
			<PreviewSurface variant={rightVariant} className={rightClassName}>
				{right}
			</PreviewSurface>
		</div>
	);
}


