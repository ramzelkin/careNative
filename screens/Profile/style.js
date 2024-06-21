import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginHorizontal: horizontalScale(16),
  },
  titleContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: horizontalScale(16), //back width
  },
  profileImage: {
    height: horizontalScale(128),
    width: horizontalScale(128),
    marginLeft: horizontalScale(16),
    marginVertical: verticalScale(16),
  },
  userInfoContainer: {
    marginLeft: horizontalScale(16),
  },
  buttonsConTainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flexBasis: '50%',
  },
  settingItem: {
    paddingVertical: verticalScale(16),
    marginHorizontal: horizontalScale(16),
  },
});

export default style;
