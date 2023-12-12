import { Outlet } from "react-router";
import { EmptyProps } from "../components/types";
import Navigation from "../components/navigation";

const Layout: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
