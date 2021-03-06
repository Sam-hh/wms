import { lazy } from 'react';

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Forms = lazy(() => import('../pages/Forms'));
const Cards = lazy(() => import('../pages/Cards'));
const Charts = lazy(() => import('../pages/Charts'));
const Buttons = lazy(() => import('../pages/Buttons'));
const Modals = lazy(() => import('../pages/Modals'));
const Tables = lazy(() => import('../pages/Tables'));
const Page404 = lazy(() => import('../pages/404'));
const Blank = lazy(() => import('../pages/Blank'));
const manageUsers = lazy(() => import('../pages/manageUsers'));
const addUser = lazy(() => import('../pages/addUser'));
const addParking = lazy(() => import('../pages/AddParking'));
const ParkedVehicles = lazy(() => import('../pages/ParkedVehicles'));
const PMSSettings = lazy(() => import('../pages/PMSSettings'));
const Tickets = lazy(() => import('../pages/Tickets'));
const SalesList = lazy(() => import('../pages/SalesList'));
const SaleStatistics = lazy(() => import('../pages/SalesStatistic'));
const ManageCategories = lazy(() => import('../pages/ManageCategories'));
const AddProducts = lazy(() => import('../pages/AddProducts'));
const ManageSuppliers = lazy(() => import('../pages/ManageSuppliers'));
const ManageProducts = lazy(() => import('../pages/ManageProducts'));
const Refunds = lazy(() => import('../pages/Refunds'));
const AddPurchase = lazy(() => import('../pages/AddPurchase'));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/manage-users',
    component: manageUsers,
  },
  {
    path: '/add-user',
    component: addUser,
  },
  {
    path: '/add-parking',
    component: addParking,
  },
  {
    path: '/parked-vehicles',
    component: ParkedVehicles,
  },
  {
    path: '/pms-settings',
    component: PMSSettings,
  },
  {
    path: '/sales-statistics',
    component: SaleStatistics,
  },
  {
    path: '/sales-list',
    component: SalesList,
  },
  {
    path: '/manage-categories',
    component: ManageCategories,
  },
  {
    path: '/add-products',
    component: AddProducts,
  },
  {
    path: '/manage-suppliers',
    component: ManageSuppliers,
  },
  {
    path: '/manage-products',
    component: ManageProducts,
  },
  {
    path: '/refunds',
    component: Refunds,
  },
  {
    path: '/add-purchase',
    component: AddPurchase,
  },
];

export default routes;
