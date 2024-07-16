import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = ({navigation}) => {
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
          <View style={style.titleContainer}>
            <Header
              title={'Profile'}
              type={2}
              alignment={'center'}
              color={'#1C0D12'}
            />
          </View>
        </View>
        <View>
          <Image
            style={style.profileImage}
            source={require('../../assets/images/profile-image.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.userInfoContainer}>
          <Header title={'Samantha Johnson'} type={1} color={'#1C0D12'} />
          <Header title={'@samanthajonson'} type={3} color={'#994D66'} />
        </View>
        <View style={style.buttonsConTainer}>
          <View style={style.buttonWrapper}>
            <Button title={'Edit Profile'} type={2} onPress={() => {}} />
          </View>
          <View style={style.buttonWrapper}>
            <Button title={'Refer Friends'} onPress={() => {}} />
          </View>
        </View>
        <View>
          {settingsList.map(item => {
            return (
              <View key={item.name + item.settingId} style={style.settingItem}>
                <Header
                  title={item.name}
                  // type={3}
                  textStyle={globalStyle.header3}
                  color={'#1C0D12'}
                />
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
