import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  pageTitleContainer: {
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(20),
  },
  buttonContainer: {
    marginBottom: verticalScale(12),
  },
});

export default style;
