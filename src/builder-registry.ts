"use client";
import { builder, Builder } from "@builder.io/react";
import { ShippingForm } from "./components/shipping/ShippingForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ShippingForm, {
  name: "ShippingForm",
  inputs: [
    {
      name: "submitButtonText",
      type: "string",
      required: true,
    },
    {
      name: "subtitle",
      type: "string",
      required: true,
    },
    {
      name: "termsLinkText",
      type: "string",
      required: true,
    },
    {
      name: "termsText",
      type: "string",
      required: true,
    },
    {
      name: "termsUrl",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
