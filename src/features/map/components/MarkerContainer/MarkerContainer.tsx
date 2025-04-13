import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { createIcon } from "../CustomPins/helper/useCreateNewIcons";
import { FC, useEffect, useRef } from "react";
import Title from "../../../../components/ui/Title/Title";
import L from "leaflet";
import { MarkedContainerProps } from "./MarkerContainer.types";

const MarkerContainer: FC<MarkedContainerProps> = ({
  station,
  actualStationID,
  markerClickHandler,
}) => {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (station.id === actualStationID && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [station.id, actualStationID, markerRef]);

  return (
    <Marker
      ref={markerRef}
      position={station.coordinates}
      icon={
        station.id === actualStationID
          ? createIcon("active")
          : createIcon("inactive")
      }
      zIndexOffset={station.id === actualStationID ? 99 : 0}
      eventHandlers={{
        click: () => {
          markerClickHandler(station.id, station.coordinates, station);
        },
      }}
    >
      <Popup>
        <Title as="h4">{station.name}</Title>
        <p>
          <span className="font-bold">Location:</span> {station.location}
        </p>
        <p>
          <span className="font-bold">Type:</span> {station.type}
        </p>
      </Popup>
    </Marker>
  );
};
export default MarkerContainer;
