import {SettingsService} from './SettingsService';
import {openSettings} from 'react-native-permissions';

export class ConcreteSettingsService implements SettingsService {
  openSettings(): void {
    openSettings();
  }
}
