import { useQuery } from "@tanstack/react-query";
import { SensorTypesI } from "../../../../types/global.types";
import { sensorApi } from "../../../../api/api";

// custom hook to fetch and manage results using tanstack query
export function useGetSensorTypes() {
  const fallback: SensorTypesI[] = []; // default empty array in case of no data

  const {
    data = fallback, // use fallback if no data available
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["sensorTypes"],
    queryFn: () => sensorApi.getSensorTypes(),
  });

  return { data, isLoading, isSuccess, isError, error }; // return query state and data
}
