import {Platform} from 'react-native';
import {PermissionsService} from '../services/PermissionsService/PermissionsService';
import {IOSCameraPermissionsService} from '../services/PermissionsService/IOSCameraPermissionsService';
import {MediaService} from '../services/ImagePickerService/MediaService';
import {ImagePickerService} from '../services/ImagePickerService/ImagePickerService';

export class ServiceLocator {
  static #instance: ServiceLocator;

  permissionsService: PermissionsService;
  mediaService: MediaService;

  private constructor() {
    if (Platform.OS === 'ios') {
      this.permissionsService = new IOSCameraPermissionsService();
    } else {
      this.permissionsService = new IOSCameraPermissionsService();
    }

    this.mediaService = new ImagePickerService();
  }

  public static get instance(): ServiceLocator {
    if (!ServiceLocator.#instance) {
      ServiceLocator.#instance = new ServiceLocator();
    }

    return ServiceLocator.#instance;
  }
}
