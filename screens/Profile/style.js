import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: horizontalScale(50),
  },
  title: {},
});

export default style;
