import { FC } from "react";
import ElementWrapper from "../../../../components/ui/ElementWrapper/ElementWrapper";
import Title from "../../../../components/ui/Title/Title";
import SensorDetailElement from "../SensorDetailElement/SensorDetailElement";
import ErrorMessage from "../../../../components/ui/ErrorMessage/ErrorMessage";
import { SensorDetailsProps } from "./SensorDerails.types";

const SensorDetails: FC<SensorDetailsProps> = ({ station, sensorsDetails }) => {
  return (
    <ElementWrapper classList="gap-6 w-full">
      <Title as="h2">{station !== null ? station.name : ""}</Title>
      {sensorsDetails !== null && sensorsDetails?.length > 0 ? (
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sensorsDetails?.map((sensor) => {
            return (
              <SensorDetailElement
                key={sensor.id + sensor.name}
                sensor={sensor}
              />
            );
          })}
        </div>
      ) : (
        <ErrorMessage
          isError={true}
          errorTitle="Oops! There was an error."
          errorSubtitle="No sensor details found for this station."
          align="left"
        />
      )}
    </ElementWrapper>
  );
};

export default SensorDetails;
