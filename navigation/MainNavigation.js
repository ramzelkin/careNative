import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        header: () => {
          null;
        },
        headerShown: false,
      }}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
