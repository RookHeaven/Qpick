import { Header } from '../header/Header.tsx';
import { Footer } from '../footer/Footer.tsx';

import { Outlet } from 'react-router-dom';

import { FC } from 'react';

export const App: FC = () => {

  return (
    <>
      <div className={'wrapper'}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
