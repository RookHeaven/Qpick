import { App } from '../components/app/App.tsx';
import { Page404 } from '../pages/page404/Page404.tsx';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'
           element={<App />}
           errorElement={<Page404 />}>
      <Route path=''
             lazy={(async () => {
               const { MainPage } = await import('../pages/mainPage/MainPage.tsx');
               return { Component: MainPage };
             })} />
      <Route path='/cart'
             lazy={(async () => {
               const { CartPage } = await import('../pages/cartPage/CartPage.tsx');
               return { Component: CartPage };
             })} />
    </Route>,
  ),
);

export default router;
