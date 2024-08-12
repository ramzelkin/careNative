import {createNavigationContainerRef} from '@react-navigation/native';
import {WelcomeCoordinator, WelcomeParamList} from '../screens/Welcome/Welcome';
import {
  ChooseOptionCoordinator,
  ChooseOptionParamList,
} from '../screens/ChooseOption/ChooseOption';
import {
  ModifyInputCoordinator,
  ModifyInputParamList,
} from '../screens/ModifyInput/ModifyInput';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type RootStackParamList = ChooseOptionParamList &
  WelcomeParamList &
  ChooseOptionCoordinator &
  ChooseOptionParamList &
  ModifyInputCoordinator &
  ModifyInputParamList;

export class Coordinator
  implements
    WelcomeCoordinator,
    ModifyInputCoordinator,
    ChooseOptionCoordinator
{
  welcomeScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ChooseOption', {coordinator: this});
    }
  }
  modifyInputScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ModifyInput', {coordinator: this});
    }
  }
  chooseOptionScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ModifyInput', {coordinator: this});
    }
  }
}
