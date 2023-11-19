import { Home } from "lucide-react";
import { ModeToggle } from "../elements/ModeToggle";

const Sidebar = () => {
  return (
    <nav className="flex flex-col md:w-[15rem] p-4 border-r bg-background h-[100vh] justify-between">
      <a className="flex items-center gap-2 cursor-pointer">
        <Home />
        Add Property
      </a>
      <ModeToggle />
    </nav>
  );
};

export default Sidebar;
