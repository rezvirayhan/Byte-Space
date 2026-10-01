import { Outlet } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/ui/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <div></div>
      <main className="">
        <Outlet />
      </main>
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
