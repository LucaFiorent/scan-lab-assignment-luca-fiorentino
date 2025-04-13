import { Station } from "../../../../types/global.types";

export interface MarkedContainerProps {
  station: Station;
  actualStationID: string | null;
  markerClickHandler: (
    stationID: string,
    stationCoordinates: [number, number],
    station: Station
  ) => void;
}
