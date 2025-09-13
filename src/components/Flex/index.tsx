import { ReactNode } from "react";

type JustifyOptions = "start" | "center" | "end" | "between" | "around" | "evenly";
type AlignOptions = "start" | "center" | "end" | "stretch" | "baseline";
type DirectionOptions = "row" | "column";
type WrapOptions = "wrap" | "nowrap" | "wrap-reverse";

type FlexProps = {
  children: ReactNode;
  direction?: DirectionOptions;
  justify?: JustifyOptions;
  align?: AlignOptions;
  wrap?: WrapOptions;
  gap?: number | string;
  className?: string;
}

const justifyMap: Record<JustifyOptions, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignMap: Record<AlignOptions, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const directionMap: Record<DirectionOptions, string> = {
  row: "flex-row",
  column: "flex-col",
};

const wrapMap: Record<WrapOptions, string> = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  "wrap-reverse": "flex-wrap-reverse",
};

export function Flex({
  children,
  direction = "row",
  justify = "start",
  align = "start",
  wrap = "nowrap",
  gap = 0,
  className = "",
}: FlexProps) {
  const gapClass = typeof gap === "number" ? `gap-${gap}` : gap;

  return (
    <div
      className={`flex ${directionMap[direction]} ${justifyMap[justify]} ${alignMap[align]} ${wrapMap[wrap]} ${gapClass} ${className}`}
    >
      {children}
    </div>
  );
};
