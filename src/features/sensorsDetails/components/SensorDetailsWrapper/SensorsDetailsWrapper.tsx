import { FC } from "react";
import { SensorDetailsWrapperProps } from "./SensorDetailsWrapper";

const SensorDetailsWrapper: FC<SensorDetailsWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap px-8 py-2 border-1 rounded-4xl w-full m-4 overflow-y-scroll">
      {children}
    </div>
  );
};

export default SensorDetailsWrapper;
