import {ILangButton, INavLink} from '../components/footer/types.ts';

export const navLinks: INavLink[] = [
  {
    name: 'Избранное',
    to: ''
  },
  {
    name: 'Корзина',
    to: '/cart'
  },
  {
    name: 'Контакты',
    to: ''
  },
  {
    name: 'Условия сервиса',
    to: ''
  }
];

export const langButtons: ILangButton[] = [
  {
    name: 'Рус',
    isActive: true
  },
  {
    name: 'Eng',
    isActive: false
  }
];
