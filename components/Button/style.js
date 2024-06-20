import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    // width: '90%',
    height: verticalScale(44),
    borderRadius: horizontalScale(50),
    backgroundColor: '#DB1457',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(12),
  },
  title: {
    color: '#FCF7FA',
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(14),
  },
});

export default style;
