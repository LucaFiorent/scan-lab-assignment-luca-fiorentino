import { LoaderCircle } from "lucide-react";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-emerald-500">
      <LoaderCircle size={40} className="animate-spin" />
      <div className="typing-text text-xl">Loading...</div>
    </div>
  );
};

export default LoadingComponent;
