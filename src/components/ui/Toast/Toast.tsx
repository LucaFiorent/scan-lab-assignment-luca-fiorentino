import { FC, useEffect } from "react";
import { CircleCheckBig, TriangleAlert, Info } from "lucide-react";
import { ToastProps } from "./Toast.types";

const Toast: FC<ToastProps> = ({ toast, removeToast }) => {
  useEffect(() => {
    // set a timer to remove toast after 5 sec
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 5000);
    // cleanup - clear timer
    return () => clearTimeout(timer);
  }, [removeToast, toast.id]); // rerun effect if dependencies changes

  return (
    <div
      className={`fixed flex items-center gap-4 text-md min-w-xs
        max-w-150 top-20 left-1/2 transform -translate-x-1/2 
        pl-4 sm:pl-6 md:pl-4 lg:pl-4 pr-8 py-2
         rounded-full shadow-md text-white ${
           toast.type === "success"
             ? "bg-green-700"
             : toast.type === "error"
             ? "bg-red-400"
             : "bg-blue-400"
         }`}
    >
      <div className="m-lg">
        {toast.type === "success" ? (
          <CircleCheckBig size={30} />
        ) : toast.type === "error" ? (
          <TriangleAlert size={30} />
        ) : (
          <Info size={30} />
        )}
      </div>
      <p className="font-semibold">{toast.message}</p>
    </div>
  );
};

export default Toast;
