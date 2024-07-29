import {Platform} from 'react-native';
import {PermissionsService} from '../services/PermissionsService/PermissionsService';
import {IOSPermissionsService} from '../services/PermissionsService/IOSPermissionsService';

export class ServiceLocator {
  static #instance: ServiceLocator;

  permissionsService: PermissionsService;

  private constructor() {
    if (Platform.OS === 'ios') {
      this.permissionsService = new IOSPermissionsService();
    } else {
      this.permissionsService = new IOSPermissionsService();
    }
  }

  public static get instance(): ServiceLocator {
    if (!ServiceLocator.#instance) {
      ServiceLocator.#instance = new ServiceLocator();
    }

    return ServiceLocator.#instance;
  }
}
