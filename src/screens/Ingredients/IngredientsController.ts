import {IngredientsService} from '../../services/IngredientsService/IngredientsService';

export class IngredientsController {
  private ingredientsService: IngredientsService;

  constructor(ingredientsService: IngredientsService) {
    this.ingredientsService = ingredientsService;
  }
}
