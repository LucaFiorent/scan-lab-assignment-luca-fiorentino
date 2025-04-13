import { Station } from "../../../../types/global.types";

export interface StationElementProps {
  station: Station;
  selectedSensor: string | null;
  loadingLiveSensDet: boolean;
  handleSelectStation: (id: string) => void;
}
