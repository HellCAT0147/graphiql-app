import { Outlet } from 'react-router';
import { EmptyProps } from '../components/types';
import Navigation from '../components/navigation';

const Layout: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <section className="layout">
      <Navigation />
      <Outlet />
    </section>
  );
};

export default Layout;
