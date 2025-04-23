import React, { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "stretch";
  gap?: 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48;
  className?: string;
  style?: React.CSSProperties;
}

// Static mapping to ensure Tailwind generates these classes
const gapClasses: Record<number, string> = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8",
  12: "gap-12",
  16: "gap-16",
  24: "gap-24",
  32: "gap-32",
  48: "gap-48",
};

export const Flex: React.FC<FlexProps> = ({
  children,
  direction = "row",
  justify = "start",
  align = "start",
  gap,
  className = "",
  style,
}) => {
  // Map props to Tailwind class names
  const directionClass = direction === "column" ? "flex-col" : "flex-row";

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  // Use static mapping for gap classes to ensure Tailwind picks them up
  const gapClass = gap ? gapClasses[gap] : "";

  return (
    <div
      className={`flex ${directionClass} ${justifyClasses[justify]} ${alignClasses[align]} ${gapClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Flex;
