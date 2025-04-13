import useStationsStore from "../../../../store/stationsStore";
import L from "leaflet";
import { Station, UseStationsDetailsI } from "../../../../types/global.types";
import { useEffect, useRef, useState } from "react";
import { useRealTimeSensorDetails } from "../queries/useStationsQueries";
import { flyToMarker } from "../../utils/mapHelpers";
import { openWindowHandler } from "../../utils/windowHelpers";

export function useMapHandler(stationsData: Station[]) {
  const [selectedSensor, setSelectedSensor] = useState("");
  const mapRef = useRef<L.Map | null>(null);

  // Extracts setter functions from the Zustand store
  const {
    setActualStationID,
    setSensorsDetails,
    setIsLoading,
    setActualStation,
  } = useStationsStore();

  // Fetches real-time sensor details for the currently selected sensor from the custom hook.
  const {
    data: liveSensorDetailsData,
    isLoading: loadingLiveSensDet,
    isSuccess: fetchingLiveSensDetSuccess,
  }: UseStationsDetailsI = useRealTimeSensorDetails(selectedSensor);

  /**
   * Handles the logic for selecting a station.
   * @param stationID - A string-based ID used to:
   *   - Update the selected sensor
   *   - Move the map to the corresponding marker
   *   - Open a new window with sensor details (if not already open)
   * @returns void
   */
  function handleSelectStation(stationID: string) {
    const url = `/sensors-details`;

    const selectedStation = stationsData.find(
      (station) => station.id === stationID
    );

    if (
      stationID &&
      stationID !== selectedSensor &&
      selectedStation?.coordinates
    ) {
      setSelectedSensor(stationID);
      setActualStationID(stationID);
      setActualStation(selectedStation);
      flyToMarker(selectedStation.coordinates, mapRef.current);
      openWindowHandler(url);
    }
  }

  // When new sensor details are successfully fetched, store them and stop loading
  useEffect(() => {
    if (fetchingLiveSensDetSuccess && liveSensorDetailsData) {
      setSensorsDetails(liveSensorDetailsData);
      setIsLoading(false);
    }
  }, [
    fetchingLiveSensDetSuccess,
    liveSensorDetailsData,
    setSensorsDetails,
    setIsLoading,
  ]);

  // Keep the loading state in sync with the live sensor details fetch status
  useEffect(() => {
    setIsLoading(loadingLiveSensDet);
  }, [loadingLiveSensDet, setIsLoading]);

  return {
    selectedSensor,
    handleSelectStation,
    loadingLiveSensDet,
    mapRef,
  };
}
