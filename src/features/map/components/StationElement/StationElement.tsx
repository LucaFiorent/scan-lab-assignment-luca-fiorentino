import { FC } from "react";
import { CheckCircle, LoaderCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { StationElementProps } from "./StationsElement.types";

const StationElement: FC<StationElementProps> = ({
  station,
  selectedSensor,
  loadingLiveSensDet,
  handleSelectStation,
}) => {
  const classListWrapper = twMerge(
    `flex items-center gap-2 cursor-pointer justify-between`,
    selectedSensor === station.id
      ? "font-bold text-emerald-500"
      : "hover:scale-110 hover:font-semibold hover:text-emerald-500 origin-left duration-200 ease-in-out"
  );

  return (
    <li
      onClick={() => {
        handleSelectStation(station.id);
      }}
      className={classListWrapper}
    >
      <p>{station.name}</p>
      {loadingLiveSensDet && station.id === selectedSensor ? (
        <LoaderCircle className="animate-spin" size="20" />
      ) : (
        !loadingLiveSensDet &&
        station.id === selectedSensor && <CheckCircle size="20" />
      )}
    </li>
  );
};

export default StationElement;
