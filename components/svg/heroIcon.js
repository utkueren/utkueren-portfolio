import React from "react";

const heroIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_63_105)">
        <mask
          id="mask0_63_105"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="50"
          height="50"
        >
          <path d="M50 0H0V50H50V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_63_105)">
          <path
            d="M25 0C25.8487 13.4399 36.56 24.1513 50 25C36.56 25.8487 25.8487 36.56 25 50C24.1513 36.56 13.4399 25.8487 0 25C13.4399 24.1513 24.1513 13.4399 25 0Z"
            fill="url(#paint0_linear_63_105)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_63_105"
          x1="25"
          y1="0"
          x2="25"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF99F7" />
          <stop offset="1" stopColor="#FFDBB0" />
        </linearGradient>
        <clipPath id="clip0_63_105">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default heroIcon;
