



export interface IButton {
    variant: "primary" | "success" | "secondary";
    className?: string;
    outline?: boolean;
    disabled?: boolean;
    size?: "sm" | "lg";
  }