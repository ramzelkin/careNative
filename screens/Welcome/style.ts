import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    marginHorizontal: horizontalScale(16),
    marginBottom: verticalScale(12),
    marginTop: verticalScale(20),
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  fullWidthButton: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  buttonContainer: {
    marginBottom: verticalScale(140),
  },
});

export default style;
