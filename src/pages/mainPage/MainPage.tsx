import { CatalogList } from '../../components/catalogList/CatalogList.tsx';
import { ModalProduct } from '../../components/modalProduct/ModalProduct.tsx';

import { FC, useEffect } from 'react';

import Modal from 'react-modal';

import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../redux/slices/modal/modalSlice.ts';

import { RootState } from '../../redux/store.ts';

import { data } from '../../constants/dataConstants.ts';

import styles from './mainPage.module.scss';

export const MainPage: FC = () => {

  const modalIsOpen = useSelector((state: RootState) => state.modal.modalIsOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const onCloseModal = (): void => {
    dispatch(closeModal(false));
  };

  return (
    <main>
      <section className={styles.catalog}>
        <div className={'container'}>
          <h2 className={styles.catalog__title}>Наушники</h2>
          <CatalogList data={data} category={'headphones'} />
          <h2 className={styles.catalog__title}>Беспроводные наушники</h2>
          <CatalogList data={data} category={'wirelessHeadphones'} />
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        className={'modal'}
        overlayClassName={'overlay'}
        closeTimeoutMS={500}>
        <ModalProduct closeModal={onCloseModal} />
      </Modal>
    </main>
  );
};
