import { Home, PiggyBank, UserCog } from "lucide-react";

export const BottomNavBar = () => {
  return (
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
  );
};
