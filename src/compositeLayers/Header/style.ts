import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {scaleFontSize} from '../../utils/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(22),
    lineHeight: scaleFontSize(28),
  },
  title2: {
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(23),
  },
  title3: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(24),
  },
});

export default style;
