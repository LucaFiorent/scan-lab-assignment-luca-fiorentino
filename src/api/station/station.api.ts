import { axiosInstance } from "../../axiosInstance";
import { baseUrl } from "../../axiosInstance/constants";

// fetches all stations data
export async function getStations() {
  const prepareUrl = `${baseUrl}/station`;
  const { data } = await axiosInstance.get(prepareUrl);

  return data;
}

// fetches stations details based on stationID
export async function getStationsDetails(stationID: string) {
  const prepareUrl = `${baseUrl}/station/${stationID}/sensors`;
  const { data } = await axiosInstance.get(prepareUrl);

  return data;
}

// fetches real time sensors details based on SensorsID
export async function getRealTimeSensorDetails(stationID: string) {
  const prepareUrl = `${baseUrl}/station/${stationID}/live`;
  const { data } = await axiosInstance.get(prepareUrl);
  console.log("REALTIME DATA", data);

  return data;
}
