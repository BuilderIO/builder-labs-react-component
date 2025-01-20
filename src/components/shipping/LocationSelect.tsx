import * as React from "react";
import { LocationSelectProps } from "./types";

export const LocationSelect: React.FC<LocationSelectProps> = ({
  label,
  value,
  options,
  onChange,
  className = "",
}) => (
  <div
    className={`flex flex-col w-full text-base whitespace-nowrap text-stone-900 ${className}`}
  >
    <label
      className="leading-snug"
      htmlFor={label.toLowerCase().replace(/\s/g, "-")}
    >
      {label}
    </label>
    <div className="relative">
      <select
        id={label.toLowerCase().replace(/\s/g, "-")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full py-3 pr-10 pl-4 mt-2 leading-none bg-white rounded-lg border border-solid border-zinc-300 min-h-[40px] min-w-[240px]"
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-2">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  </div>
);
