import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
