import { Outlet } from 'react-router-dom';
import Footer from '../components/features/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col  text-slate-800">
      <div>{/* <h1 className="text-7xl font-bold">Navbar</h1> */}</div>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
