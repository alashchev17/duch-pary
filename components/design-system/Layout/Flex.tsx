import React, { ReactNode, useMemo } from "react";

interface FlexProps {
  id?: string;
  children: ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "stretch";
  gap?: 2 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 24 | 32 | 48;
  className?: string;
  style?: React.CSSProperties;
}

// Static mapping to ensure Tailwind generates these classes
const gapClasses: Record<number, string> = {
  2: "gap-2",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
  24: "gap-24",
  32: "gap-32",
  48: "gap-48",
};

export const Flex: React.FC<FlexProps> = ({
  id,
  children,
  direction = "row",
  justify = "start",
  align = "start",
  gap,
  className = "",
  style,
}) => {
  // Map props to Tailwind class names
  const directionClass = useMemo(() => {
    if (direction === "row") return "flex-row";
    if (direction === "column") return "flex-col";
    if (direction === "row-reverse") return "flex-row-reverse";
    if (direction === "column-reverse") return "flex-col-reverse";
  }, [direction]);

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
      id={id}
      className={`flex ${directionClass} ${justifyClasses[justify]} ${alignClasses[align]} ${gapClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Flex;
