/**
 * Pans and zooms the map to the selected station marker.
 * @param stationID - A string-based ID used to locate the target station on the map.
 * If found, the map will fly to its coordinates with a zoom level of 18.
 */
export function flyToMarker(
  stationCoordinates: [number, number],
  mapRef: L.Map | null
): void {
  const map = mapRef;

  if (map && stationCoordinates) {
    map.flyTo(stationCoordinates, 18, { duration: 1.5 });
  }
}
