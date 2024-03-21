import {CatalogList} from '../../components/catalogList/CatalogList.tsx';

import {FC} from 'react';

import {data} from '../../constants/dataConstants.ts';

import styles from './mainPage.module.scss';

export const MainPage: FC = () => {

  return (
    <main>
      <section className={styles.catalog}>
        <div className={'container'}>
          <h2 className={styles.catalog__title}>Наушники</h2>
          <CatalogList data={data} category={'headphones'}/>
          <h2 className={styles.catalog__title}>Беспроводные наушники</h2>
          <CatalogList data={data} category={'wirelessHeadphones'}/>
        </div>
      </section>
    </main>
  )
}
