import {ServiceLocator} from './ServiceLocator';
import {ChooseOptionController} from '../screens/ChooseOption/ChooseOptionController';

export class ChooseOptionFactory {
  createController(): ChooseOptionController {
    return new ChooseOptionController(
      ServiceLocator.instance.permissionsService,
    );
  }
}
