import { twMerge } from "tailwind-merge";
import Title from "../../../../components/ui/Title/Title";
import { FC } from "react";
import { Power, PowerOff } from "lucide-react";
import { SensorDetailElementProps } from "./SensorDetailElement.types";

const SensorDetailElement: FC<SensorDetailElementProps> = ({ sensor }) => {
  const titleIconClassList = twMerge(
    "flex items-center justify-center p-1 rounded-full text-white",
    sensor.status === "on" ? "bg-emerald-800" : "bg-rose-600"
  );
  return (
    <div
      className="flex flex-col bg-stone-900 p-4 rounded-2xl gap-2"
      key={sensor.id + sensor.name}
    >
      <Title
        as="h4"
        icon={
          <div className={titleIconClassList}>
            {sensor.status === "on" ? (
              <Power size={18} />
            ) : (
              <PowerOff size={18} />
            )}
          </div>
        }
      >
        {sensor.name}
      </Title>
      {sensor.readings.map((item) => (
        <div key={item.id + item.create_datetime}>
          {sensor.type === "Video Feed" ? (
            <div className="">
              {item.value && (
                <video controls>
                  <source src={item.value} type="application/x-mpegURL" />
                </video>
              )}
            </div>
          ) : (
            <div>
              {parseFloat(item.value).toFixed(2)} {sensor.unit}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SensorDetailElement;
