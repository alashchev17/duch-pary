import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  fullWidth = false,
}) => {
  return (
    <div
      className={`w-full ${fullWidth ? "" : "max-w-[1512px]"} mx-auto px-4 md:px-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
