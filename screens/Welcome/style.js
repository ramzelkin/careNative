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
});

export default style;
