import * as React from "react";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => (
  <div className="flex gap-3 items-center w-full">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="w-4 h-4 rounded bg-zinc-800 min-h-[16px] accent-zinc-800"
      aria-label={label}
    />
    <label className="flex-1 shrink self-stretch my-auto text-base leading-snug basis-0 text-stone-900">
      {label}
    </label>
  </div>
);
