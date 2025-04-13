import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import SensorPin from "../Icons/SensorPin";

const tailwindToHex = (className: string): string => {
  const colorMap: { [key: string]: string } = {
    "emerald-700": "#047857",
    "emerald-200": "#a7f3d0",
    "slate-600": "#475569",
    "slate-300": "#cbd5e1",
    "rose-600": "#e11d48",
    "rose-300": "#fda4af",
    // Add other colors as necessary...
  };
  return colorMap[className] || "#D9D9D9"; // Default color
};

/**
 * Generates a Leaflet icon based on the sensor status
 * @param {string} status - The status of the sensor (e.g., 'active', 'inactive', 'warning')
 * @returns {L.Icon} - The Leaflet icon to be used for the marker
 */
export const createIcon = (status: string): L.Icon => {
  let iconColor = {
    stroke: tailwindToHex("slate-700"),
    fill: tailwindToHex("slate-200"),
  }; // Default color (inactive)

  switch (status) {
    case "active":
      iconColor = {
        stroke: tailwindToHex("emerald-700"),
        fill: tailwindToHex("emerald-200"),
      };
      break;
    case "inactive":
      iconColor = {
        stroke: tailwindToHex("slate-600"),
        fill: tailwindToHex("slate-200"),
      };
      break;
    case "warning":
      iconColor = {
        stroke: tailwindToHex("rose-600"),
        fill: tailwindToHex("rose-300"),
      };
      break;
    default:
      iconColor = {
        stroke: tailwindToHex("slate-700"),
        fill: tailwindToHex("slate-200"),
      };
  }

  return L.divIcon({
    className: `custom-div-icon sensor-icon ${status}`,
    html: ReactDOMServer.renderToString(
      <SensorPin stroke={iconColor.stroke} fill={iconColor.fill} />
    ),
    iconSize: [20, 20], // Adjust the size of the icon
    iconAnchor: [30, 30], // Anchor the icon at the bottom center
    popupAnchor: [0, -20], // Position the popup
  });
};
