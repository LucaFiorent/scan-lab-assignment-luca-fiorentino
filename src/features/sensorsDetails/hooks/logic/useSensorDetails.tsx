import { useEffect } from "react";
import useStationsStore from "../../../../store/stationsStore";

/**
 * Custom hook that syncs the sensor details state across multiple tabs or windows.
 * It listens for the `storage` event and updates the Zustand store when the `stations-storage`
 * key in `localStorage` changes.
 */
export function useSyncSensorDetails() {
  useEffect(() => {
    const syncState = (event: StorageEvent) => {
      // Check if the storage event is related to the "stations-storage" key
      if (event.key === "stations-storage") {
        const stationStorage = localStorage.getItem("stations-storage");
        if (stationStorage) {
          const { state } = JSON.parse(stationStorage);
          useStationsStore.setState(state);
        }
      }
    };

    window.addEventListener("storage", syncState);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("storage", syncState);
  }, []);
}
