import { ToastT } from "../../../types/global.types";

export interface ToastProps {
  toast: ToastT;
  removeToast: (id: number) => void;
}
