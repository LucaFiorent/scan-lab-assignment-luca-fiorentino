import { AxiosError } from "axios";

export interface Id {
  id: string;
}

export interface IsActions extends error {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
export interface error {
  error?: AxiosError | null;
}

export interface ToastT {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
}

export interface Station extends Id {
  id: string;
  name: string;
  type: string;
  location: string;
  coordinates: [number, number];
}

export interface UseStationsI {
  data: Station[];
  isLoading: boolean;
  isSuccess: boolean;
}
export interface UseStationsDetailsI {
  data: SensorDetails[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface SensorDetails {
  id: string;
  name: string;
  location: string;
  status: string;
  station_id: string;
  type_id: string;
  type: string;
  unit: string;
  readings: Readings[];
  description: string;
  valid_range: number[];
  value_status: string;
}

export interface Readings {
  id: string;
  sensor_id: string;
  value: string;
  create_datetime: string;
}

export interface SensorTypesI {
  id: string;
  name: string;
  metric_name: string;
}
