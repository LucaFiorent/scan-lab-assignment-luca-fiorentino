import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToastContainer from "../components/ui/Toast/ToastContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { queryClient } from "../react-query/queryClient";
import PageLayout from "./PageLayout";
import SensorsDetailsPage from "../features/sensorsDetails/pages/SensorsDetailsPage/SensorsDetailsPage";
import MapPage from "../features/map/pages/MapPage/MapPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<MapPage />} />
            <Route path="/sensors-details" element={<SensorsDetailsPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
