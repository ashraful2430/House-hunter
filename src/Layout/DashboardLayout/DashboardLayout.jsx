import { Outlet } from "react-router-dom";
import DashSideBar from "../../Pages/DashboardSideBar/DashSideBar";
import AddHouseButton from "../AddHouseButton/AddHouseButton";
import useUser from "../../Hooks/useUser";

const DashboardLayout = () => {
  const [users] = useUser();
  return (
    <div className="flex gap-2 font-lora relative">
      <div>
        <DashSideBar />
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      {users.role === "House Owner" && (
        <>
          <div className="absolute bottom-10 right-3">
            <AddHouseButton />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
