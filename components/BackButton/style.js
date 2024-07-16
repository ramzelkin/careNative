import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  buttonBack: {
    backgroundColor: '#ffffff',
  },
  titleBack: {
    color: '#1C0D12',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
  },
});

export default style;
