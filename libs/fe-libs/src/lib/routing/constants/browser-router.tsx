import { Navigate, createBrowserRouter } from 'react-router-dom';
import { DEFAULT_ROUTE } from './default-route';
import { App } from '../../core/components/app/app';
import { HomePage } from '../../home/components/home-page/home-page';
import { InventoryPage } from '../../tokens/components/inventory-page/inventory-page';

export const browserRouter = createBrowserRouter([
  { path: '/', element: <Navigate to={DEFAULT_ROUTE} /> },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/inventory',
        element: <InventoryPage />,
      },
    ],
  },
  { path: '*', element: <Navigate to={DEFAULT_ROUTE} /> },
]);
