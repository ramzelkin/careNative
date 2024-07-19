import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  primaryButton: {
    height: verticalScale(44),
    borderRadius: horizontalScale(50),
    backgroundColor: '#DB1457',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(12),
  },
  secondaryButton: {
    height: verticalScale(44),
    borderRadius: horizontalScale(50),
    backgroundColor: '#F2E8EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(12),
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
});

export default style;
