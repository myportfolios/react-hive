import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
export function Button({ children }: ButtonProps): ReactNode {
  return <button>{children}</button>;
}
