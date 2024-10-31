import { ReactNode } from "react";

import "./button.css";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "text" | "outlined" | "contained";
  handleClick?: () => void;
}
export function Button({
  children,
  size = "md",
  variant = "text",
  handleClick,
}: ButtonProps): ReactNode {
  return (
    <button
      className={` btn btn-${size} btn-${variant}`}
      onClick={handleClick && handleClick}
    >
      {children}
    </button>
  );
}
