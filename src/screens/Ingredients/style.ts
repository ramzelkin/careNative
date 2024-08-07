import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  elementsContainer: {
    marginLeft: horizontalScale(16),
  },
  ingredientsContainer: {
    marginBottom: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexBasis: '80%',
  },
  backButtonContainer: {
    flexBasis: '10%',
  },
  manageIngredientsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(16),
  },
  button: {
    width: '49%',
  },
});

export default style;
