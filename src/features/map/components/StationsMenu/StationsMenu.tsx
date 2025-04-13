import { HouseWifi } from "lucide-react";
import Title from "../../../../components/ui/Title/Title";
import { Station } from "../../../../types/global.types";
import { FC } from "react";
import useStationsStore from "../../../../store/stationsStore";
import LoadingStationMenu from "../LoadingStationMenu/LoadingStationMenu";
import ErrorMessage from "../../../../components/ui/ErrorMessage/ErrorMessage";
import StationElement from "../StationElement/StationElement";
import { StationMenuProps } from "./StationsMenu.types";

const StationMenu: FC<StationMenuProps> = ({
  stationsData,
  loadingStations,
  isErrorStations,
  loadingLiveSensDet,
  handleSelectStation,
}) => {
  const selectedStation = useStationsStore((state) => state.actualStationID);

  return (
    <div className="flex flex-col gap-5">
      <Title as="h2" id="stations-title" icon={<HouseWifi />}>
        Stations
      </Title>
      {isErrorStations && (
        <ErrorMessage
          isError={isErrorStations}
          errorTitle="Oops! There was an error."
          errorSubtitle="Try again later."
          align="center"
        />
      )}
      {loadingStations ? (
        <LoadingStationMenu />
      ) : (
        <ul className="flex flex-col gap-2">
          {stationsData.map((station: Station) => {
            return (
              <StationElement
                key={station.id + station.name}
                station={station}
                selectedSensor={selectedStation}
                loadingLiveSensDet={loadingLiveSensDet}
                handleSelectStation={handleSelectStation}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default StationMenu;
