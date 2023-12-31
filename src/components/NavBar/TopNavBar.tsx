import { LogOut, Settings } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

export const TopNavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">HRM</a>
      </div>
      <div className="flex-none gap-4">
        <ThemeToggle />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <Settings className="h-5 w-5" />
                Settings
              </a>
            </li>
            <li>
              <a>
                <LogOut className="h-5 w-5" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
