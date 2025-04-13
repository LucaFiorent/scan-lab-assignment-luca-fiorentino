import { useQuery } from "@tanstack/react-query";
import { stationApi } from "../../../../api/api";
import { SensorDetails, Station } from "../../../../types/global.types";

// custom hook to fetch and manage results using tanstack query
export function useStations() {
  const fallback: Station[] = []; // default empty array in case of no data

  const {
    data = fallback, // use fallback if no data available
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["stations"],
    queryFn: () => stationApi.getStations(),
  });

  return { data, isLoading, isSuccess, isError, error }; // return query state and data
}

// custom hook to fetch and manage results using tanstack query
export function useStationsDetails(stationID: string) {
  const fallback: SensorDetails[] = []; // default empty array in case of no data

  const {
    data = fallback, // use fallback if no data available
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["stationsDetails", stationID],
    queryFn: () => stationApi.getStationsDetails(stationID),
    enabled: !!stationID,
  });

  return { data, isLoading, isSuccess, isError, error }; // return query state and data
}

// custom hook to fetch and manage results using tanstack query
export function useRealTimeSensorDetails(stationID: string) {
  const fallback: SensorDetails[] = []; // default empty array in case of no data

  const {
    data = fallback, // use fallback if no data available
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["liveSensorsDetails", stationID],
    queryFn: () => stationApi.getRealTimeSensorDetails(stationID),
    refetchInterval: 5000, // fetch every 5 seconds
    enabled: !!stationID,
  });

  return { data, isLoading, isSuccess, isError, error }; // return query state and data
}
