import {ServiceLocator} from './ServiceLocator';
import {IngredientsController} from '../screens/Ingredients/IngredientsController';

export class IngredientsFactory {
  createController(): IngredientsController {
    return new IngredientsController(
      ServiceLocator.instance.ingredientsService,
    );
  }
}
