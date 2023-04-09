import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// hooks
import useAuth from '../hooks/useAuth';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
// import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    // {
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
    //       path: 'register',
    //       element: (
    //         <GuestGuard>
    //           <Register />
    //         </GuestGuard>
    //       ),
    //     },
    //     { path: 'login-unprotected', element: <Login /> },
    //     { path: 'register-unprotected', element: <Register /> },
    //     { path: 'reset-password', element: <ResetPassword /> },
    //     { path: 'new-password', element: <NewPassword /> },
    //     { path: 'verify', element: <VerifyCode /> },
    //   ],
    // },

    // Dashboard Routes
    {
      path: 'dashboard',
      // element: (
      //   // <AuthGuard>
      //   //   <DashboardLayout />
      //   // </AuthGuard>
      //   <DashboardLayout />
      // ),
      children: [
        // { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'map', element: <MainMap /> }
        // { path: 'ecommerce', element: <GeneralEcommerce /> },
        // { path: 'analytics', element: <GeneralAnalytics /> },
        // { path: 'banking', element: <GeneralBanking /> },
        // { path: 'booking', element: <GeneralBooking /> },

        // {
        //   path: 'e-commerce',
        //   children: [
        //     { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
        //     { path: 'shop', element: <EcommerceShop /> },
        //     { path: 'product/:name', element: <EcommerceProductDetails /> },
        //     { path: 'list', element: <EcommerceProductList /> },
        //     { path: 'product/new', element: <EcommerceProductCreate /> },
        //     { path: 'product/:name/edit', element: <EcommerceProductEdit /> },
        //     { path: 'checkout', element: <EcommerceCheckout /> },
        //   ],
        // },
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <LandingPage />, index: true }
        // { path: 'about-us', element: <About /> },
        // { path: 'contact-us', element: <Contact /> },
        // { path: 'faqs', element: <Faqs /> },
      ]
    },
    // {
    //   path: '/map',
    //   // element: <MainLayout />,
    //   children: [
    //     { element: <MainMap />, index: true }
    //     // { path: 'about-us', element: <About /> },
    //     // { path: 'contact-us', element: <Contact /> },
    //     // { path: 'faqs', element: <Faqs /> },
    //   ]
    // },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// AUTHENTICATION

// DASHBOARD

const LandingPage = Loadable(lazy(() => import('../../landing-page/index')));
const MainMap = Loadable(lazy(() => import('../../map/index')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
