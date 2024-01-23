import { Outlet } from "react-router-dom";
import DashSideBar from "../../Pages/DashboardSideBar/DashSideBar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-2">
      <div>
        <DashSideBar />
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
