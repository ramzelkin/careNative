import {StyleSheet} from 'react-native';
import {verticalScale} from '../../src/utils/scaling';
import {horizontalScale} from '../../src/utils/scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
  },
  headerIndents: {
    marginTop: verticalScale(29),
    marginBottom: verticalScale(21),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginHorizontal: horizontalScale(16),
  },
});

export default globalStyle;
