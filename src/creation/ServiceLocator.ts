import {PermissionsService} from '../services/PermissionsService/PermissionsService';
import {MediaService} from '../services/ImagePickerService/MediaService';
import {ImagePickerService} from '../services/ImagePickerService/ImagePickerService';
import {PhotoLibraryPermissionsService} from '../services/PermissionsService/PhotoLibraryPermissionsService';

export class ServiceLocator {
  static #instance: ServiceLocator;

  permissionsService: PermissionsService;
  mediaService: MediaService;

  private constructor() {
    this.permissionsService = new PhotoLibraryPermissionsService();
    this.mediaService = new ImagePickerService();
  }

  public static get instance(): ServiceLocator {
    if (!ServiceLocator.#instance) {
      ServiceLocator.#instance = new ServiceLocator();
    }

    return ServiceLocator.#instance;
  }
}
