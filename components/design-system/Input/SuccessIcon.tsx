import React, { SVGProps } from "react";

export const SuccessIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M36.6673 18.8096V20.343C36.6653 23.937 35.5015 27.4341 33.3495 30.3127C31.1976 33.1912 28.1728 35.2971 24.7262 36.3161C21.2797 37.3352 17.5961 37.2128 14.2248 35.9673C10.8535 34.7217 7.97508 32.4198 6.01892 29.4047C4.06276 26.3897 3.13364 22.8231 3.37011 19.2368C3.60659 15.6506 4.996 12.2368 7.33112 9.50474C9.66624 6.77265 12.822 4.86859 16.3276 4.07653C19.8333 3.28447 23.5011 3.64685 26.784 5.10962"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6667 7.00964L20 23.693L15 18.693"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
