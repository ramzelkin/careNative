import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginHorizontal: horizontalScale(16),
  },
  pageTitleContainer: {
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(20),
  },
  buttonContainer: {
    marginBottom: verticalScale(12),
  },
});

export default style;
