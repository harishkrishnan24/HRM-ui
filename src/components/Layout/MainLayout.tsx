import { Home, PiggyBank, UserCog, Settings, LogOut } from "lucide-react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">HRM</a>
        </div>
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
      <main>{children}</main>
      <div className="btm-nav">
        <button className="active">
          <Home />
          <span className="btm-nav-label">Property</span>
        </button>
        <button disabled>
          <PiggyBank />
          <span className="btm-nav-label">Expense Manager</span>
        </button>
        <button disabled>
          <UserCog />
          <span className="btm-nav-label">Family Management</span>
        </button>
      </div>
    </>
  );
};
