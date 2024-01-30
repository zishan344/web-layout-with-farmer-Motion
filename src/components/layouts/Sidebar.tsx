import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-2">
        <NavLink
          className={({ isActive }) =>
            cn(
              "flex gap-3 p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white",

              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/dashboard">
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "flex gap-3 p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white",

              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/service-list">
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "flex gap-3 p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white",

              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/add-service">
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
