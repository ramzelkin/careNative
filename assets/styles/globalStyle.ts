import {StyleSheet} from 'react-native';
import {verticalScale} from './scaling';
import {getFontFamily} from '../fonts/helper';
import {scaleFontSize} from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
  },
  headerIndents: {
    marginTop: verticalScale(29),
    marginBottom: verticalScale(21),
  },
  header1: {
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(22),
    lineHeight: scaleFontSize(28),
  },
});

export default globalStyle;
