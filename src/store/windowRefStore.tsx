import { create } from "zustand";
import { WindowStoreI } from "./types/storeTypes";

/**
 * Zustand store to manage a reference to a window (`windowRef`)
 *
 * @windowRef reference to a window
 * @setWindowRef setter function to update the window reference
 */
const useWindowStore = create<WindowStoreI>((set) => ({
  windowRef: null,
  setWindowRef: (ref) => set({ windowRef: ref }),
}));

export default useWindowStore;
