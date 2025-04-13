import { FC } from "react";
import { SensorPinProps } from "./Icons.types";

const SensorPin: FC<SensorPinProps> = ({ stroke, fill }) => {
  return (
    <div className="relative">
      <div className="flex w-15 h-15 animate-spin ease-in-out">
        <svg
          viewBox="0 0 412 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="206.5"
            cy="109.5"
            r="104.5"
            fill={fill}
            stroke={stroke}
            strokeWidth="10"
          />
          <path
            d="M206.5 164.566C176.088 164.566 151.434 139.912 151.434 109.5C151.434 79.0876 176.088 54.4335 206.5 54.4335C236.912 54.4335 261.566 79.0876 261.566 109.5C261.566 123.895 256.043 137 247 146.811"
            stroke={stroke}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle
            cx="17.0896"
            cy="17.0896"
            r="17.0896"
            transform="matrix(-1 0 0 1 223.59 92.4104)"
            fill="#F64444"
          />
        </svg>
      </div>
      <div className="flex w-15 h-15 animate-ping top-0 left-0 absolute">
        <svg
          viewBox="0 0 416 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.8006 72.0151C61.5258 82.3205 55.8006 96.4792 55.8006 112.105C55.8006 127.64 61.4597 141.725 70.64 152.015"
            stroke={fill}
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43 33C22.5954 53.3532 10 81.3166 10 112.177C10 142.859 22.4501 170.677 42.6466 191"
            stroke={fill}
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M345 151.985C354.275 141.679 360 127.521 360 111.895C360 96.3601 354.341 82.2749 345.161 71.9849"
            stroke={fill}
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M372.801 191C393.205 170.647 405.801 142.683 405.801 111.823C405.801 81.1411 393.351 53.3228 373.154 33"
            stroke={fill}
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SensorPin;
