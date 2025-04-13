import { Station } from "../../../../types/global.types";

export interface StationMenuProps {
  stationsData: Station[];
  loadingStations: boolean;
  isErrorStations: boolean;
  loadingLiveSensDet: boolean;
  handleSelectStation: (id: string) => void;
}
