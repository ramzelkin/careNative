import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  elementsContainer: {
    marginHorizontal: horizontalScale(16),
  },
  buttonContainer: {
    marginVertical: verticalScale(20),
  },
});

export default style;
