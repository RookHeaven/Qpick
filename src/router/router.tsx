import {App} from '../components/app/App.tsx';
import {MainPage} from '../pages/mainPage/MainPage.tsx';
import {CartPage} from '../pages/cartPage/CartPage.tsx';
import {Page404} from '../pages/page404/Page404.tsx';

import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'
           element={<App/>}
           errorElement={<Page404/>}>
      <Route path=''
             element={<MainPage/>}/>
      <Route path='/cart'
             element={<CartPage/>}/>
    </Route>
  )
)

export default router;
