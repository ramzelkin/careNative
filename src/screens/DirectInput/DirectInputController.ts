import {IngredientsService} from '../../services/IngredientsService/IngredientsService';

export class DirectInputController {
  private ingredientsService: IngredientsService;

  constructor(ingredientsService: IngredientsService) {
    this.ingredientsService = ingredientsService;
  }

  getIngredients = (text: string): void => {
    this.ingredientsService.parseIngredients(text);
  };
}
