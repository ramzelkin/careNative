import {Coordinator} from '../navigation/Coordinator';
import {ChooseOptionFactoryInstance} from './ChooseOptionFactory';

export class CoordinatorFactory {
  createCoordinator(): Coordinator {
    return new Coordinator(new ChooseOptionFactoryInstance());
  }
}
