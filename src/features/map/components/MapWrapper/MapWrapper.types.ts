import { Station } from "../../../../types/global.types";
import L from "leaflet";

export interface MapWrapperProps {
  position: number[];
  stationsData: Station[];
  mapRef: React.RefObject<L.Map | null>;
  handleSelectStation: (stationID: string) => void;
}
