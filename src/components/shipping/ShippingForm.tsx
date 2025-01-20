"use client";
import * as React from "react";
import { InputField } from "./InputField";
import { LocationSelect } from "./LocationSelect";
import { TextAreaField } from "./TextAreaField";
import { Checkbox } from "./Checkbox";
import { ShippingFormProps, ShippingFormData } from "./types";

const US_CITIES = [
  { value: "nyc", label: "New York City, NY" },
  { value: "la", label: "Los Angeles, CA" },
  { value: "chicago", label: "Chicago, IL" },
  { value: "houston", label: "Houston, TX" },
  { value: "phoenix", label: "Phoenix, AZ" },
  { value: "philadelphia", label: "Philadelphia, PA" },
  { value: "san-antonio", label: "San Antonio, TX" },
  { value: "san-diego", label: "San Diego, CA" },
  { value: "dallas", label: "Dallas, TX" },
  { value: "san-jose", label: "San Jose, CA" },
];

export const ShippingForm: React.FC<ShippingFormProps> = ({
  title,
  subtitle,
  submitButtonText,
  termsText,
  termsLinkText,
  termsUrl,
}) => {
  const [formData, setFormData] = React.useState<ShippingFormData>({
    fullName: "",
    location: US_CITIES[0].value,
    deliveryNote: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const updateField = <K extends keyof ShippingFormData>(
    field: K,
    value: ShippingFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-6 max-w-xs bg-white rounded-lg border border-solid border-zinc-300 min-w-[320px]"
    >
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold tracking-tight leading-tight text-stone-900">
          {title}
        </h2>
        <p className="self-start mt-1 text-base leading-snug text-neutral-500">
          {subtitle}
        </p>
      </div>

      <InputField
        label="Full Name"
        value={formData.fullName}
        onChange={(value) => updateField("fullName", value)}
        className="mt-6"
      />

      <LocationSelect
        label="Location"
        value={formData.location}
        options={US_CITIES}
        onChange={(value) => updateField("location", value)}
        className="mt-6"
      />

      <TextAreaField
        label="Delivery note"
        value={formData.deliveryNote}
        onChange={(value) => updateField("deliveryNote", value)}
        iconSrc="https://cdn.builder.io/api/v1/image/assets/294ff852af9e4c6fb53e639fdecee417/b3d6fa67e58db18876d468801da26f906b1c1fb433a8c6f6cd678323e4be7a51?apiKey=294ff852af9e4c6fb53e639fdecee417&"
        className="mt-6"
      />

      <div className="flex flex-col mt-6 w-full">
        <Checkbox
          label={termsText}
          checked={formData.termsAccepted}
          onChange={(checked) => updateField("termsAccepted", checked)}
        />
        <div className="flex gap-3 items-center w-full leading-snug text-neutral-500">
          <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
          <a
            href={termsUrl}
            className="flex-1 shrink self-stretch my-auto underline basis-0 decoration-auto decoration-solid underline-offset-auto"
          >
            {termsLinkText}
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="flex gap-4 items-center justify-center mt-6 w-full text-base leading-none text-neutral-100 overflow-hidden p-3 rounded-lg border border-solid bg-zinc-800 border-zinc-800 min-w-[240px]"
      >
        {submitButtonText}
      </button>
    </form>
  );
};
