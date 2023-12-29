import { Outlet } from 'react-router';
import { EmptyProps } from '../components/types';
import Navigation from '../components/navigation';
import { Footer } from '../components/footer';

const Layout: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <section className="layout min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
