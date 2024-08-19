import {ServiceLocator} from './ServiceLocator';
import {
  ChooseOptionController,
  ChooseOptionControllerImpl,
} from '../screens/ChooseOption/ChooseOptionController';
import {ConcreteSettingsService} from '../services/SettingsService/ConcreteSettingsService';
import {PhotoLibraryPermissionsService} from '../services/PermissionsService/PhotoLibraryPermissionsService';

export class ChooseOptionFactoryInstance {
  createController(): ChooseOptionController {
    return new ChooseOptionControllerImpl(
      ServiceLocator.instance.permissionsService,
      new PhotoLibraryPermissionsService(),
      new ConcreteSettingsService(),
      ServiceLocator.instance.mediaService,
    );
  }
}
