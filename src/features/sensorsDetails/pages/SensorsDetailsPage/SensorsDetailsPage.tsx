import { useSyncSensorDetails } from "../../hooks/logic/useSensorDetails";
import useStationsStore from "../../../../store/stationsStore";
import LoadingComponent from "../../../../components/ui/LoadingComponent/LoadingComponent";
import SensorsDetailsWrapper from "../../components/SensorsDetailsWrapper/SensorsDetailsWrapper";
import SensorDetails from "../../components/SensorDetails/SensorDetails";
import ErrorMessage from "../../../../components/ui/ErrorMessage/ErrorMessage";

const SensorsDetailsPage = () => {
  const { isLoading, sensorsDetails, station } = useStationsStore();

  useSyncSensorDetails();

  if (isLoading) {
    return (
      <SensorsDetailsWrapper>
        <LoadingComponent />
      </SensorsDetailsWrapper>
    );
  }
  return (
    <SensorsDetailsWrapper>
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
    </SensorsDetailsWrapper>
  );
};

export default SensorsDetailsPage;
