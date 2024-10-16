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
import {
  IngredientsCoordinator,
  IngredientsParamList,
} from '../screens/Ingredients/Ingredients';
import {LoginCoordinator, LoginParamList} from '../screens/Login/Login';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type RootStackParamList = ChooseOptionParamList &
  WelcomeParamList &
  ChooseOptionParamList &
  ModifyInputParamList &
  IngredientsParamList &
  LoginParamList;

export class Coordinator
  implements
    WelcomeCoordinator,
    ModifyInputCoordinator,
    ChooseOptionCoordinator,
    IngredientsCoordinator,
    LoginCoordinator
{
  welcomeScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('Login', {coordinator: this});
    }
  }
  chooseOptionScreenModifyInput() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ModifyInput', {coordinator: this});
    }
  }
  modifyInputScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('Ingredients', {coordinator: this});
    }
  }
  ingredientsScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ModifyInput', {coordinator: this});
    }
  }
  loginScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ChooseOption', {coordinator: this});
    }
  }

  goBack() {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }
}
