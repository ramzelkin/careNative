import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import {getFontFamily} from '../../utils/getFontFamily';

const style = StyleSheet.create({
  primaryButton: {
    height: verticalScale(44),
    borderRadius: horizontalScale(50),
    backgroundColor: '#DB1457',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    height: verticalScale(44),
    borderRadius: horizontalScale(50),
    backgroundColor: '#F2E8EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    color: '#FCF7FA',
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(14),
  },
  title2: {
    color: '#1C0D12',
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(14),
  },
  disabled: {
    opacity: 0.5,
  },
});

export default style;
