import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {
  getHeader2,
  getHeader1,
  getHeader3,
} from '../../compositeLayers/Header/getHeader';
import {
  getPrimaryButton,
  getSecondaryButton,
} from '../../compositeLayers/Button/getButton';
import {useSelector} from 'react-redux';
import {User} from '../../entities/User';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

interface RootState {
  user: User;
}

const Profile: React.FC<Props> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.user);

  const pageTitle = getHeader2('Profile', 'center');
  const profileTitle = getHeader1(user.firstName + ' ' + user.lastName);
  const profileNickName = getHeader3(user.nickName, '', '#994D66');
  const buttonEdit = getSecondaryButton('Edit Profile', () => {});
  const buttonRefer = getPrimaryButton('Refer Friends', () => {});
  const buttonLogOut = getSecondaryButton('Log Out', () => {});

  const settingsList = [
    {
      settingId: 1,
      name: 'Account Settings',
    },
    {
      settingId: 2,
      name: 'Notifications',
    },
    {
      settingId: 3,
      name: 'Shipping Address',
    },
  ];
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.headerIndents, globalStyle.headerContainer]}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={style.titleContainer}>{pageTitle}</View>
        </View>
        <View>
          <Image
            style={style.profileImage}
            source={require('../../../assets/images/profile-image.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.userInfoContainer}>
          {profileTitle}
          {profileNickName}
        </View>
        <View style={style.buttonsConTainer}>
          <View style={style.buttonWrapper}>{buttonEdit}</View>
          <View style={style.buttonWrapper}>{buttonRefer}</View>
        </View>
        <View>
          {settingsList.map(item => {
            const settingsListName = getHeader3(item.name);

            return (
              <View key={item.name + item.settingId} style={style.settingItem}>
                {settingsListName}
              </View>
            );
          })}
        </View>
        <View>{buttonLogOut}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
