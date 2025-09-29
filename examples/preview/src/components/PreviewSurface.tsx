import React, { PropsWithChildren } from 'react';
// Image backgrounds removed; gradient-only preview surface

type PreviewSurfaceProps = PropsWithChildren<{
    className?: string;
}>;

export default function PreviewSurface({ className, children }: PreviewSurfaceProps): JSX.Element {
	const base = 'p-12 rounded-2xl overflow-hidden flex items-center justify-center';
	const composed = [base, className].filter(Boolean).join(' ');

    return (
        <div className={`${composed} [background:linear-gradient(135deg,#ffffff_0%,#cbeafe_20%,#60a5fa_45%,#22d3ee_70%,#bbf7d0_90%,#ffffff_100%)] dark:[background:linear-gradient(135deg,#0a2a43_0%,#0b1220_30%,#0d3322_100%)]`}>
            {children}
        </div>
    );
}


