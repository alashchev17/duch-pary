import React, { SVGProps } from "react";

export const FacebookIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M40 20.1222C40 9.00902 31.0458 0 20 0C8.9543 0 0 9.00902 0 20.1222C0 30.1656 7.31368 38.4904 16.875 40V25.9388H11.7969V20.1222H16.875V15.689C16.875 10.6459 19.861 7.86024 24.4292 7.86024C26.6176 7.86024 28.9062 8.25326 28.9062 8.25326V13.2052H26.3844C23.9 13.2052 23.125 14.7564 23.125 16.3478V20.1222H28.6718L27.7852 25.9388H23.125V40C32.6864 38.4904 40 30.166 40 20.1222Z" />
    </svg>
  );
};
