import React, { SVGProps } from "react";

export const EnvelopeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5957 -0.000976562H18.5957C19.7003 -0.000976562 20.5957 0.894453 20.5957 1.99902V13.999C20.5957 15.1036 19.7003 15.999 18.5957 15.999H2.5957C1.49113 15.999 0.595703 15.1036 0.595703 13.999V1.99902C0.595703 0.894453 1.49113 -0.000976562 2.5957 -0.000976562ZM12.2457 11.449L18.5957 6.99902V4.89902L11.2457 10.049C10.8548 10.3203 10.3366 10.3203 9.9457 10.049L2.5957 4.89902V6.99902L8.9457 11.449C9.9367 12.1417 11.2547 12.1417 12.2457 11.449Z"
      />
    </svg>
  );
};
