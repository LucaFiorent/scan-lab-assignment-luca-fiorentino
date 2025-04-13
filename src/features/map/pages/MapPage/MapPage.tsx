import { useStations } from "../../hooks/queries/useStationsQueries";
import MapWrapper from "../../components/MapWrapper/MapWrapper";
import StationsMenu from "../../components/StationsMenu/StationsMenu";
import { useMapHandler } from "../../hooks/logic/useMapHandler";

const MapPage = () => {
  const position: [number, number] = [37.96824821695461, 23.76684774178203];

  // Fetches stations from the custom hook useStations
  const {
    data: stationsData,
    isLoading: stationsLoading,
    isError: isErrorStations,
  } = useStations();

  /**
   * get values and functions from the useMapHandler custom hook:
   * - selectedSensor: the ID of the currently selected sensor
   * - handleSelectStation: function to handle selecting a station
   * - loadingLiveSensDet: the loading state for fetching live sensor details
   * - mapRef: a reference to the map object, used for map interactions
   */
  const { handleSelectStation, loadingLiveSensDet, mapRef } =
    useMapHandler(stationsData);

  return (
    <section className="flex gap-5 w-full h-screen p-2">
      <aside className="flex-1 min-w-60 border-1 p-7 rounded-4xl">
        <StationsMenu
          stationsData={stationsData}
          loadingStations={stationsLoading}
          isErrorStations={isErrorStations}
          loadingLiveSensDet={loadingLiveSensDet}
          handleSelectStation={handleSelectStation}
        />
      </aside>
      <div className="flex-4 w-full h-full rounded-4xl overflow-hidden">
        <MapWrapper
          position={position}
          stationsData={stationsData}
          handleSelectStation={handleSelectStation}
          mapRef={mapRef}
        />
      </div>
    </section>
  );
};

export default MapPage;
