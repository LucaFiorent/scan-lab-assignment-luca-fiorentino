import { FC } from "react";
import { ElementWrapperProps } from "./ElementWrapper.types";

const ElementWrapper: FC<ElementWrapperProps> = ({
  children,
  classList = "",
}) => {
  return (
    <section className={`flex flex-col gap-2 my-4 ${classList}`}>
      {children}
    </section>
  );
};

export default ElementWrapper;
