import { ReactElement } from "react";

export interface TitleProps {
  children: ReactElement | string;
  icon?: ReactElement;
  as?: "h1" | "h2" | "h3" | "h4";
  color?: string;
  isError?: boolean;
  id?: string;
  ariaLabel?: string;
}
