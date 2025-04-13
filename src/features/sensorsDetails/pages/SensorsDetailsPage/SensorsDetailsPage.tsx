import { useSyncSensorDetails } from "../../hooks/logic/useSensorDetails";
import useStationsStore from "../../../../store/stationsStore";
import SensorDetailsWrapper from "../../components/SensorDetailsWrapper/SensorsDetailsWrapper";
import LoadingComponent from "../../../../components/ui/LoadingComponent/LoadingComponent";
import SensorDetails from "../../components/SensorDetails/SensorDetails";
import ErrorMessage from "../../../../components/ui/ErrorMessage/ErrorMessage";

const SensorsDetailsPage = () => {
  const { isLoading, sensorsDetails, station } = useStationsStore();

  useSyncSensorDetails();

  if (isLoading) {
    return (
      <SensorDetailsWrapper>
        <LoadingComponent />
      </SensorDetailsWrapper>
    );
  }
  return (
    <SensorDetailsWrapper>
      {station && sensorsDetails ? (
        <SensorDetails station={station} sensorsDetails={sensorsDetails} />
      ) : (
        <ErrorMessage
          isError={true}
          errorTitle="Oops! There was an error."
          errorSubtitle="No data found, try again later."
          align="left"
        />
      )}
    </SensorDetailsWrapper>
  );
};

export default SensorsDetailsPage;
