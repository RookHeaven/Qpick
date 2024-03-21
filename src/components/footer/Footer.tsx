import {Button} from '../button/Button.tsx';

import {Link} from 'react-router-dom';

import {FC} from 'react';

import {langButtons, navLinks} from '../../constants/itemConstants.ts';

import {ISocialLink} from './types.ts';

import classNames from 'classnames';

import Lang from '../../assets/icons/lang.svg?react';
import Vk from '../../assets/icons/vk.svg?react';
import Telegram from '../../assets/icons/telegram.svg?react';
import Whatsapp from '../../assets/icons/whatsapp.svg?react';

import styles from './footer.module.scss';

const socialLinks: ISocialLink[] = [
  {
    icon: <Vk/>,
    title: 'Вконтакте',
    href: 'https://vk.com/'
  },
  {
    icon: <Telegram/>,
    title: 'Телеграм',
    href: 'https://web.telegram.org/k/'
  },
  {
    icon: <Whatsapp/>,
    title: 'Ватсапп',
    href: 'https://www.whatsapp.com/'
  }
];

export const Footer: FC = () => {
  return (
    <footer className={classNames(styles.footer, 'container')}>
      <div className={styles.footer__container}>
        <Link className={styles.footer__logo} to="/">QPICK</Link>
        <div className={styles.footer__wrapper}>
          <nav className={styles.footer__nav}>
            <ul className={styles.footer__navList}>
              {navLinks.map(item =>
                <li key={item.name}
                    className={styles.footer__navItem}>
                  <Link className={styles.footer__navLink}
                        to={item.to}>{item.name}</Link>
                </li>)}

            </ul>
          </nav>
          <div className={styles.footer__lang}>
            <Lang/>
            <ul className={styles.footer__langList}>
              {langButtons.map(item =>
                <li key={item.name}
                    className={styles.footer__langItem}>
                  <Button isLangButton={true} isActive={item.isActive}>{item.name}</Button>
                </li>)}
            </ul>
          </div>
        </div>
        <ul className={styles.footer__social}>
          {socialLinks.map(item =>
            <li key={item.title}
                className={styles.footer__socialItem}>
              <a className={styles.footer__socialLink}
                 href={item.href}
                 target={'_blank'}
                 title={item.title}
                 aria-label={item.title}>
                {item.icon}
              </a>
            </li>)}
        </ul>
      </div>
    </footer>
  );
};
