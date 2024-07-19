import React from 'react';
import Header from '../../components/Header/Header';

import style from './style';

export const getHeader1 = (
  title: string,
  alignment: string = 'left',
  color: string = '#1C0D12',
): JSX.Element => {
  return (
    <Header
      title={title}
      alignment={alignment}
      color={color}
      style={style.title1}
    />
  );
};

export const getHeader2 = (
  title: string,
  alignment?: string,
  color?: string,
): JSX.Element => {
  return (
    <Header
      title={title}
      alignment={alignment}
      color={color}
      style={style.title2}
    />
  );
};

export const getHeader3 = (
  title: string,
  alignment: string = 'left',
  color: string = '#1C0D12',
): JSX.Element => {
  return (
    <Header
      title={title}
      alignment={alignment}
      color={color}
      style={style.title3}
    />
  );
};
