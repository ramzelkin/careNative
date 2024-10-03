import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome/Welcome';
import Profile from '../screens/Profile/Profile';
import ChooseOption from '../screens/ChooseOption/ChooseOption';
import Permissions from '../screens/Permissions/Permissions';
import ModifyInput from '../screens/ModifyInput/ModifyInput';
import Ingredients from '../screens/Ingredients/Ingredients';
import {CoordinatorFactory} from '../creation/CoordinatorFactory';

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
  const coordinator = useRef(new CoordinatorFactory().createCoordinator());

  return (
    <Stack.Navigator
      screenOptions={{
        header: (): React.ReactNode => {
          return null;
        },
        headerShown: false,
      }}
      initialRouteName={'Welcome'}>
      <Stack.Screen
        name={'Welcome'}
        component={Welcome}
        initialParams={{coordinator: coordinator.current}}
      />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen
        name={'ChooseOption'}
        component={ChooseOption}
        initialParams={{coordinator: coordinator.current}}
      />
      <Stack.Screen name={'Permissions'} component={Permissions} />
      <Stack.Screen
        name={'ModifyInput'}
        component={ModifyInput}
        initialParams={{coordinator: coordinator.current}}
      />
      <Stack.Screen name={'Ingredients'} component={Ingredients} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
