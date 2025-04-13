import { axiosInstance } from "../../axiosInstance";
import { baseUrl } from "../../axiosInstance/constants";

// fetches all sensor types
export async function getSensorTypes() {
  const prepareUrl = `${baseUrl}/sensor_type`;
  const { data } = await axiosInstance.get(prepareUrl);

  return data;
}
