import { FC } from "react";
import Title from "../Title/Title";
import { TriangleAlert } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: FC<ErrorMessageProps> = ({
  errorTitle,
  errorSubtitle,
  isError,
  align = "left",
}) => {
  // merge classed
  const classListWrapper = twMerge(
    "flex text-rose-600",
    align === "center" &&
      "text-center flex-col items-center justify-center gap-2",
    align === "left" && "text-left items-center justify-start gap-4",
    align === "right" && "text-right items-center justify-end gap-4"
  );

  return (
    <div className={classListWrapper}>
      <div>
        <TriangleAlert className="animate-pulse" size="33" />
      </div>
      <div>
        <Title as="h4" isError={isError}>
          {errorTitle}
        </Title>
        {errorSubtitle && <p>{errorSubtitle}</p>}
      </div>
    </div>
  );
};

export default ErrorMessage;
