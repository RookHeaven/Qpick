import {Card} from '../card/Card.tsx';

import {FC, JSX} from 'react';

import {TCatalogList} from './types.ts';

import styles from './catalogList.module.scss';


export const CatalogList: FC<TCatalogList> = ({data, category}) => {

  const items: JSX.Element[] = data
    .filter(item => item.category === category)
    .map(item => <Card key={item.id} item={item}/>
    )

  return (
    <ul className={styles.catalog__list}>
      {items}
    </ul>
  );
};
