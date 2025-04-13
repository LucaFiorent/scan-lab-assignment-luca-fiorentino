import useToastStore from "../../../store/toastStore";
import { ToastT } from "../../../types/global.types";
import Toast from "./Toast";

const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed space-y-2 z-9999">
      {toasts.map((toast: ToastT) => (
        <Toast key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
};

export default ToastContainer;
