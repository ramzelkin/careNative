import {ServiceLocator} from './ServiceLocator';
import {ModifyInputController} from '../screens/ModifyInput/ModifyInputController';

export class ModifyInputFactory {
  createController(): ModifyInputController {
    return new ModifyInputController(
      ServiceLocator.instance.ingredientsService,
    );
  }
}
