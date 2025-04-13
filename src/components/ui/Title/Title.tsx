import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { TitleProps } from "./Title.types";

const Title: FC<TitleProps> = ({
  children,
  icon,
  as = "h2",
  color,
  isError = false,
  id,
  ariaLabel,
}) => {
  // merge classes
  const classWrapper = twMerge(
    "md:text-md lg:text-lg",
    as === "h1" &&
      "sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold uppercase",
    as === "h2" && "md:text-md lg:text-2xl font-bold uppercase",
    as === "h3" && "md:text-md lg:text-lg font-bold uppercase",
    as === "h4" && "md:text-md lg:text-lg font-bold",
    as === "h2" || as === "h3" || as === "h4" ? color : "text-slate-300",
    isError && "text-rose-600"
  );

  return (
    <div
      id={id}
      className={`flex items-center gap-3 group cursor-default ${classWrapper}`}
    >
      {!!icon && (
        <div
          aria-label="hidden"
          className={` group-hover:scale-120 duration-300 transform transition ease-in-out ${
            color ? color : "text-slate-300"
          }`}
        >
          {icon}
        </div>
      )}
      {React.createElement(
        as,
        {
          id: id,
          "aria-label": ariaLabel || `${children}`,
        },
        children
      )}
    </div>
  );
};

export default Title;
