import React from 'react';

type CheckboxProps = {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label?: string;
	className?: string;
};

export default function Checkbox({ checked, onChange, label, className }: CheckboxProps): JSX.Element {
	return (
        <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className={["gw-checkbox", className].filter(Boolean).join(" ")}
            />
            {label ? <span>{label}</span> : null}
        </label>
	);
}


