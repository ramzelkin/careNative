import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {
  getHeader2,
  getHeader1,
  getHeader3,
} from '../../compositLayers/Header/getHeader';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({navigation}) => {
  const pageTitle = getHeader2('Profile', 'center');
  const profileTitle = getHeader1('Samantha Johnson');
  const profileNickName = getHeader3('@samanthajonson', '', '#994D66');

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
        <View style={[globalStyle.headerIndents, style.headerContainer]}>
          <BackButton
            title={'Back'}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={style.titleContainer}>{pageTitle}</View>
        </View>
        <View>
          <Image
            style={style.profileImage}
            source={require('../../assets/images/profile-image.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.userInfoContainer}>
          {profileTitle}
          {profileNickName}
        </View>
        <View style={style.buttonsConTainer}>
          <View style={style.buttonWrapper}>
            <Button title={'Edit Profile'} type={2} onPress={() => {}} />
          </View>
          <View style={style.buttonWrapper}>
            <Button type={1} title={'Refer Friends'} onPress={() => {}} />
          </View>
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
        <View>
          <Button title={'Log out'} type={2} onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
