import {ServiceLocator} from './ServiceLocator';
import {DirectInputController} from '../screens/DirectInput/DirectInputController';

export class DirectInputFactory {
  createController(): DirectInputController {
    return new DirectInputController(
      ServiceLocator.instance.ingredientsService,
    );
  }
}
