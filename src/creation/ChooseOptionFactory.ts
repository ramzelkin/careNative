import {ServiceLocator} from './ServiceLocator';
import {ChooseOptionController} from '../screens/ChooseOption/ChooseOptionController';
import {ConcreteSettingsService} from '../services/SettingsService/ConcreteSettingsService';
import {PhotoLibraryPermissionsService} from '../services/PermissionsService/PhotoLibraryPermissionsService';

export class ChooseOptionFactory {
  createController(): ChooseOptionController {
    return new ChooseOptionController(
      ServiceLocator.instance.permissionsService,
      new PhotoLibraryPermissionsService(),
      new ConcreteSettingsService(),
      ServiceLocator.instance.mediaService,
    );
  }
}
