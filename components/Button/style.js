import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button1: {
    // width: '90%',
    height: verticalScale(44),
    borderRadius: horizontalScale(50),
    backgroundColor: '#DB1457',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(12),
    color: '#ffffff',
  },
  buttonBack: {
    backgroundColor: '#ffffff',
  },
  titleBack: {
    color: '#1C0D12',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
  },
  title1: {
    color: '#FCF7FA',
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(14),
  },
});

export default style;
