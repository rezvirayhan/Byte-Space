import { Outlet } from 'react-router-dom';
import Footer from '../components/features/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col  text-slate-800">
      <div></div>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
