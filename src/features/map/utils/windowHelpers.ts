import useWindowStore from "../../../store/windowRefStore";

/**
 * Function to open a new window with sensor details if not already open.
 * The window reference is stored in the Zustand store useWindowStore
 */
export function openWindowHandler(url: string) {
  const { windowRef, setWindowRef } = useWindowStore.getState();

  // Check if the window is already open and focus it if so
  if (windowRef && !windowRef.closed) {
    windowRef.focus();
    return;
  }

  // Open a new window and store the reference in store
  const newWindow = window.open(
    url,
    "_blank",
    "width=800,height=600,left=600,top=600"
  );

  // Update Zustand store with the new window reference
  if (newWindow) {
    setWindowRef(newWindow);
  }
}
