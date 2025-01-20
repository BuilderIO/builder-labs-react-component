import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ShippingForm } from "@/components/shipping/ShippingForm";

// ❖ Form Shipping
interface FigmaFormShippingProps extends BaseFigmaProps {
  Title?: string;
  SubTitle?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "0ce3612fd8600e5fc29e790c18a3366d60dfcfba",
  mapper(figma: FigmaFormShippingProps) {
    return (
      <ShippingForm
        title={figma.Title ?? "Shipping Information"}
        subtitle={figma.SubTitle ?? "Enter your shipping details"}
        submitButtonText="Continue"
        termsText="By continuing you agree to our"
        termsLinkText="Terms and Conditions"
        termsUrl="#"
      />
    );
  },
});
