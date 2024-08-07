import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  button: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
