import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Header = props => {
  const stylesToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  const alignmentToApply = () => {
    switch (props.alignment) {
      case 'center':
        return style.centeredTitle;
      case 'left':
        return style.initialAlignmentTitle;
      default:
        return style.initialAlignmentTitle;
    }
  };

  return (
    <View>
      <Text
        style={[
          stylesToApply(),
          alignmentToApply(),
          props.color && {color: props.color},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

Header.default = {
  title: '',
  type: 1,
  color: '#1C0D12',
  alignment: 'left',
};

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
  alignment: PropTypes.string,
};

export default Header;
