import React from 'react';
import {Routes} from './Routes';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome/Welcome';
import Profile from '../screens/Profile/Profile';
import ChooseOption from '../screens/ChooseOption/ChooseOption';
import Permissions from '../screens/Permissions/Permissions';
import DirectInput from '../screens/DirectInput/DirectInput';

const Stack = createStackNavigator();
// const MainMenuNavigation = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         header: () => {
//           null;
//         },
//         headerShown: false,
//       }}>
//       <Drawer.Screen name={Routes.Home} component={Home} />
//     </Drawer.Navigator>
//   );
// };

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (): React.ReactNode => {
          return null;
        },
        headerShown: false,
      }}
      initialRouteName={Routes.Welcome}>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'ChooseOption'} component={ChooseOption} />
      <Stack.Screen name={'Permissions'} component={Permissions} />
      <Stack.Screen name={'DirectInput'} component={DirectInput} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
