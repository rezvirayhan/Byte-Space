import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <div>
        <h1 className="text-7xl font-bold">Navbar</h1>
      </div>
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <div>
        <h1 className="text-7xl font-bold">Footer</h1>
      </div>
    </div>
  );
};

export default MainLayout;
