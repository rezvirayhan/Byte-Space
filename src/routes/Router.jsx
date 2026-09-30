import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Landing from '../Pages/Landing';
import NotFound from '../Pages/NotFound';
import Search from '../Pages/Search';
import CreatorProfile from '../Pages/CreatorProfile';
import CourseData from '../components/features/CourseDetails/CourseData';
import Login from './../Pages/Login';
import Register from './../Pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/courses',
        element: <Search />,
      },

      {
        path: '/course-details/:id',
        element: <CourseData />,
      },
      {
        path: '/creator-profile',
        element: <CreatorProfile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
