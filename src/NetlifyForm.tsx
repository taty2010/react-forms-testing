import { ReactNode } from "react";

interface NetlifyFormProps {
  formName: string;
  method: string;
  action: string;
  children: ReactNode;
}

export default function NetlifyForm({
  formName,
  method,
  children
}: NetlifyFormProps) {
  return (
    <form
      name={formName}
      method={method}
      data-netlify
      data-netlify-honeypot="bot-field"
      suppressHydrationWarning={true}
    >
      {children}
    </form>
  );
}
