import { MapContainer, TileLayer } from "react-leaflet";
import { FC } from "react";
import useStationsStore from "../../../../store/stationsStore";
import "leaflet/dist/leaflet.css";
import "../../pages/MapPage/Map.css";
import MarkerContainer from "../MarkerContainer/MarkerContainer";
import { MapWrapperProps } from "./MapWrapper.types";

const MapWrapper: FC<MapWrapperProps> = ({
  position,
  stationsData,
  mapRef,
  handleSelectStation,
}) => {
  const { actualStationID } = useStationsStore();

  return (
    <MapContainer
      ref={mapRef}
      center={position}
      zoom={13}
      className="w-full h-full rounded-4xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />

      {stationsData &&
        stationsData.map((station) => {
          return (
            <MarkerContainer
              key={station.id + station.name}
              station={station}
              actualStationID={actualStationID}
              markerClickHandler={handleSelectStation}
            />
          );
        })}
    </MapContainer>
  );
};

export default MapWrapper;
