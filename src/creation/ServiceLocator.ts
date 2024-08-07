import {PermissionsService} from '../services/PermissionsService/PermissionsService';
import {MediaService} from '../services/ImagePickerService/MediaService';
import {ImagePickerService} from '../services/ImagePickerService/ImagePickerService';
import {PhotoLibraryPermissionsService} from '../services/PermissionsService/PhotoLibraryPermissionsService';
import {InfoTransformationService} from '../services/IngredientsService/InfoTransformationService';

export class ServiceLocator {
  static #instance: ServiceLocator;

  permissionsService: PermissionsService;
  mediaService: MediaService;
  ingredientsService: InfoTransformationService;

  private constructor() {
    this.permissionsService = new PhotoLibraryPermissionsService();
    this.mediaService = new ImagePickerService();
    this.ingredientsService = new InfoTransformationService();
  }

  public static get instance(): ServiceLocator {
    if (!ServiceLocator.#instance) {
      ServiceLocator.#instance = new ServiceLocator();
    }

    return ServiceLocator.#instance;
  }
}
