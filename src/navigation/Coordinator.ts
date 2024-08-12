import {createNavigationContainerRef} from '@react-navigation/native';
import {WelcomeCoordinator, WelcomeParamList} from '../screens/Welcome/Welcome';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export type ChooseOptionParamList = {
  ChooseOption: {coordinator: any};
};

type RootStackParamList = ChooseOptionParamList & WelcomeParamList;

export class Coordinator implements WelcomeCoordinator {
  welcomeScreenContinue() {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ChooseOption', {coordinator: this});
    }
  }
}
