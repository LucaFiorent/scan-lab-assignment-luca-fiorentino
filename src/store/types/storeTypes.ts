import { SensorDetails, Station, ToastT } from "../../types/global.types";

export interface ToastStoreI {
  toasts: ToastT[];
  addToast: (message: string, type?: "success" | "error" | "info") => void;
  removeToast: (id: number) => void;
}

export interface useStationStoreI {
  actualStationID: string | null;
  station: Station | null;
  sensorsDetails: SensorDetails[] | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setActualStationID: (stationID: string) => void;
  setActualStation: (station: Station) => void;
  setSensorsDetails: (sensorsDetails: SensorDetails[]) => void;
}

export interface WindowStoreI {
  windowRef: Window | null;
  setWindowRef: (ref: Window | null) => void;
}
