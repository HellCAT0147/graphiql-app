import { Outlet } from "react-router";
import { EmptyProps } from "../types";
import Navigation from "../navigation";

const Layout: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
