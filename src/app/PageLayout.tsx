import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="flex justify-between h-screen">
      <Outlet />
    </div>
  );
};

export default PageLayout;
