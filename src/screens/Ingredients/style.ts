import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  elementsContainer: {
    marginHorizontal: horizontalScale(16),
  },
  ingredientsContainer: {
    marginBottom: verticalScale(16),
  },
});

export default style;
