import {ServiceLocator} from './ServiceLocator';
import {ChooseOptionController} from '../screens/ChooseOption/ChooseOptionController';
import {ConcreteSettingsService} from '../services/SettingsService/ConcreteSettingsService';
import {IOSPhotoLibraryPermissionsService} from '../services/PermissionsService/IOSPhotoLibraryPermissionsService';

export class ChooseOptionFactory {
  createController(): ChooseOptionController {
    return new ChooseOptionController(
      ServiceLocator.instance.permissionsService,
      new IOSPhotoLibraryPermissionsService(),
      new ConcreteSettingsService(),
      ServiceLocator.instance.mediaService,
    );
  }
}
