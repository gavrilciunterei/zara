import React from "react";

export const PulsatingCircle = () => (
  <svg
    width="40"
    height="40"
    viewbox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      fill="none"
      r="10"
      stroke="#3B82F6"
      stroke-width="2"
    >
      <animate
        attributeName="r"
        from="8"
        to="20"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="20" cy="20" fill="#3B82F6" r="10" />
  </svg>
);
