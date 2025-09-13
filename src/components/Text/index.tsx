import { ReactNode } from "react";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type TextWeight = "thin" | "light" | "normal" | "medium" | "bold" | "extrabold";
type TextAlign = "left" | "center" | "right" | "justify";

type TextProps = {
  children: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  color?: `text-${string}`;
  align?: TextAlign;
  italic?: boolean;
  className?: string;
}

const sizeMap: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

const weightMap: Record<TextWeight, string> = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const alignMap: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export function Text({
  children,
  size = "md",
  weight = "normal",
  color = "text-black",
  align = "left",
  italic = false,
  className = "",
}: TextProps) {
  return (
    <p
      className={`
        ${sizeMap[size]} 
        ${weightMap[weight]} 
        ${alignMap[align]} 
        ${color} 
        ${italic ? "italic" : ""} 
        ${className}
      `}
    >
      {children}
    </p>
  );
};
