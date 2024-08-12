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

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type RootStackParamList = ChooseOptionParamList &
  WelcomeParamList &
  ChooseOptionCoordinator &
  ChooseOptionParamList &
  ModifyInputCoordinator &
  ModifyInputParamList &
  IngredientsCoordinator &
  IngredientsParamList;

export class Coordinator
  implements
    WelcomeCoordinator,
    ModifyInputCoordinator,
    ChooseOptionCoordinator,
    IngredientsCoordinator
{
  welcomeScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ChooseOption', {coordinator: this});
    }
  }
  chooseOptionScreenContinue() {
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
}
