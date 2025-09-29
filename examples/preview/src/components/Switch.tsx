import React from 'react';

type SwitchProps = {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label?: string;
	className?: string;
};

export default function Switch({ checked, onChange, label, className }: SwitchProps): JSX.Element {
	return (
		<label className="inline-flex items-center gap-2 cursor-pointer select-none">
			{label ? <span className="mr-1.5">{label}</span> : null}
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				className={["gw-switch", className].filter(Boolean).join(" ")}
			/>
		</label>
	);
}


