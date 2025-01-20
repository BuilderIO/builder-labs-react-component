export interface ShippingFormData {
  fullName: string;
  location: string;
  deliveryNote: string;
  termsAccepted: boolean;
}

export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export interface LocationSelectProps extends Omit<InputFieldProps, "value"> {
  value: string;
  options: Array<{ value: string; label: string }>;
}

export interface TextAreaFieldProps extends InputFieldProps {
  minHeight?: string;
  iconSrc: string;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface ShippingFormProps {
  title: string;
  subtitle: string;
  submitButtonText: string;
  termsText: string;
  termsLinkText: string;
  termsUrl: string;
}
