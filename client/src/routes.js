import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import BasketPage from './pages/BasketPage';
import DevicePage from './pages/DevicePage';
import ShopPage from './pages/ShopPage';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utilities/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Component: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: ShopPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
];
