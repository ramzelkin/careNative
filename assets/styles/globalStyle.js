import {StyleSheet} from 'react-native';
import {verticalScale} from './scaling';

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
});

export default globalStyle;
