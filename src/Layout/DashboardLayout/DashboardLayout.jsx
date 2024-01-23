import { Outlet } from "react-router-dom";
import DashSideBar from "../../Pages/DashboardSideBar/DashSideBar";
import AddHouseButton from "../AddHouseButton/AddHouseButton";

const DashboardLayout = () => {
  return (
    <div className="flex gap-2 font-lora relative">
      <div>
        <DashSideBar />
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="absolute bottom-10 right-10">
        <AddHouseButton />
      </div>
    </div>
  );
};

export default DashboardLayout;
