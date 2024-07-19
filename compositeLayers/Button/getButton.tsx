import React from 'react';
import Button from '../../components/Button/Button';

import style from './style';

export const getPrimaryButton = (
  title: string,
  onPress: () => void,
): JSX.Element => {
  return (
    <Button
      title={title}
      style={style.primaryButton}
      textStyle={style.title1}
      onPress={onPress}
    />
  );
};

export const getSecondaryButton = (
  title: string,
  onPress: () => void,
): JSX.Element => {
  return (
    <Button
      title={title}
      style={style.secondaryButton}
      textStyle={style.title2}
      onPress={onPress}
    />
  );
};
