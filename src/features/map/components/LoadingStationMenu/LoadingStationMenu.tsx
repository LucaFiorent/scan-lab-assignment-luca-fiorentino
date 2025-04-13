import { LoaderCircle } from "lucide-react";

const LoadingStationMenu = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 cursor-pointer justify-between hover:scale-110 hover:font-semibold hover:text-emerald-500 origin-left duration-200 ease-in-out"
        >
          <div className="bg-slate-400 w-60 p-3 rounded-2xl animate-pulse" />
          <LoaderCircle className="animate-spin" size="20" />
        </div>
      ))}
    </div>
  );
};

export default LoadingStationMenu;
