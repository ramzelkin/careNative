import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    marginTop: verticalScale(29),
    marginBottom: verticalScale(21),
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
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
