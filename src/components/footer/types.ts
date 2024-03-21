import {JSX} from 'react';

export interface INavLink {
  name: string;
  to: string;
}

export interface ILangButton {
  name: string;
  isActive: boolean;
}

export interface ISocialLink {
  icon: JSX.Element;
  title: string;
  href: string;
}
