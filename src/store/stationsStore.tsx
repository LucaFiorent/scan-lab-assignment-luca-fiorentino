import { create } from "zustand";
import { useStationStoreI } from "./types/storeTypes";
import { SensorDetails, Station } from "../types/global.types";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * Create a Zustand store for managing the sensors details of a secelted Station
 *
 * @actualStationID Track current stationID
 * @sensorsDetails current sensorsDetails
 * @setActualStationID Save the current stationID
 * @setSensorsDetails Save SensorsDetails
 */
const useStationsStore = create<useStationStoreI>()(
  persist<useStationStoreI>(
    (set) => ({
      actualStationID: null,
      station: null,
      sensorsDetails: null,
      isLoading: false,
      setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
      setActualStationID: (stationID: string) => {
        set({ actualStationID: stationID });
      },
      setActualStation: (station: Station) => {
        set({ station: station });
      },
      setSensorsDetails: (sensorsDetails: SensorDetails[]) => {
        set({ sensorsDetails: sensorsDetails });
      },
    }),
    {
      name: "stations-storage", // Key to save in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStationsStore;
