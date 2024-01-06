import { Outlet } from 'react-router';
import Navigation from '../components/navigation';
import { Footer } from '../components/footer';

const Layout: React.FC = (): JSX.Element => {
  return (
    <section className="layout min-vh-100 d-flex flex-column justify-content-between">
      <Navigation />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
