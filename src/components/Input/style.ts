import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(15),
    color: '#36455A',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderRadius: horizontalScale(12),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: '#F5F0F2',
  },
});

export default style;
