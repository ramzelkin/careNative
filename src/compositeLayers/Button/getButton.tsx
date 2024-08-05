import React from 'react';
import Button from '../../components/Button/Button';

import style from './style';

export const getPrimaryButton = (
  title: string,
  onPress: () => void,
  isDisabled?: boolean,
): JSX.Element => {
  return (
    <Button
      title={title}
      style={[style.primaryButton, isDisabled && style.disabled]}
      textStyle={style.title1}
      onPress={onPress}
      isDisabled={isDisabled}
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
