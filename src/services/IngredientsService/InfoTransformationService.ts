import {IngredientsService} from './IngredientsService';

export class InfoTransformationService implements IngredientsService {
  private parseInfo(text: string) {
    let ingredientsArray = text.split(',');
    console.log('ingredientsArray');
    console.log(ingredientsArray);
  }

  parseIngredients(text: string): void {
    this.parseInfo(text);
  }
}
