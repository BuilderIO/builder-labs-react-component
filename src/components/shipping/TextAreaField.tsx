import * as React from "react";
import { TextAreaFieldProps } from "./types";

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChange,
  iconSrc,
  minHeight = "80px",
  className = "",
}) => (
  <div className={`flex flex-col w-full text-base leading-snug ${className}`}>
    <label
      className="text-stone-900"
      htmlFor={label.toLowerCase().replace(/\s/g, "-")}
    >
      {label}
    </label>
    <div
      className="flex overflow-hidden relative gap-1 items-start px-4 py-3 mt-2 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] text-zinc-400"
      style={{ minHeight }}
    >
      <textarea
        id={label.toLowerCase().replace(/\s/g, "-")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="z-0 flex-1 shrink basis-0 bg-transparent border-none outline-none resize-none w-full"
        aria-label={label}
      />
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain absolute bottom-1.5 z-0 shrink-0 aspect-square h-[7px] right-[5px] w-[7px]"
      />
    </div>
  </div>
);
