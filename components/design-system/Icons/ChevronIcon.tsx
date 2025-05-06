import React, { SVGProps } from "react";

export const ChevronIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M1.5 2.25L8 8.75L14.5 2.25"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
