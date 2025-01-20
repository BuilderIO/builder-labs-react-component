import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  className = "",
}) => (
  <div className={`flex flex-col w-full ${className}`}>
    <label
      className="text-base leading-snug text-stone-900"
      htmlFor={label.toLowerCase().replace(/\s/g, "-")}
    >
      {label}
    </label>
    <input
      type="text"
      id={label.toLowerCase().replace(/\s/g, "-")}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 mt-2 w-full leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px]"
      aria-label={label}
    />
  </div>
);
