import { ElementType, lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// hooks
import useAuth from '../hooks/useAuth';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';
// config
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  const { pathname } = useLocation();

  const { isAuthenticated } = useAuth();

  const isDashboard = pathname.includes('/dashboard') && isAuthenticated;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
    //   path: 'auth',
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <Login />
    //         </GuestGuard>
    //       ),
    //     },
    //     {
    //       path: 'forgot-password',
    //       element: <ForgotPassword />,
    //     },
    //     {
    //       path: 'reset-password',
    //       element: <ResetPassword />,
    //     },
    //   ],
    // },
    // Dashboard Routes
    // {
    //   path: 'dashboard',
    //   element: (
    //     <AuthGuard>
    //       <DashboardLayout />
    //     </AuthGuard>
    //   ),
    //   children: [
    //     // Request
    //     {
    //       path: 'request',
    //       children: [
    //         { element: <Navigate to="/dashboard/request" replace />, index: true },
    //         { path: 'list', element: <RequestList /> },
    //         { path: 'new', element: <QRNew /> },
    //         { path: 'detail/:fileId', element: <RequestDetail /> },
    //       ],
    //     },
    //     {
    //       path: '',
    //       children: [
    //         { element: <Navigate to="/dashboard/store" replace />, index: true },
    //         { path: 'stories', element: <ListStore /> },
    //       ],
    //     },
    //     {
    //       path: '',
    //       children: [
    //         { element: <Navigate to="/" replace />, index: true },
    //         { path: 'admins', element: <AdminList /> },
    //         { path: 'admins/create', element: <AddNewAdmin /> },
    //         { path: 'admins/:id', element: <EditAdmin /> },
    //       ],
    //     },
    //     {
    //       path: '',
    //       children: [
    //         { element: <Navigate to="/dashboard/event" replace />, index: true },
    //         { path: 'event-history', element: <History /> },
    //       ],
    //     },
    //     {
    //       path: 'spoon-code',
    //       children: [
    //         { element: <Navigate to="/dashboard/spoon-code/new" replace />, index: true },
    //         { path: 'list', element: <QRCodeList /> },
    //       ],
    //     },
    //   ],
    // },
    // Main Routes
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '',
      children: [
        {
          path: '',
          children: [
            { element: <LandingPage />, index: true },
            // { path: 'event-history', element: <LandingPage /> },
          ],
        },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
// login
const Login = Loadable(lazy(() => import('../../auth/login/Login')));
const ForgotPassword = Loadable(
  lazy(() => import('../../auth/forgot-password/ForgotPassword'))
);
const ResetPassword = Loadable(
  lazy(() => import('../../auth/reset-password/ResetPassword'))
);


const LandingPage = Loadable(lazy(() => import('../../landing-page/index')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
