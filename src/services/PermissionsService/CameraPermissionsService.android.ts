import {check, request, PERMISSIONS} from 'react-native-permissions';
import {PermissionsService} from './PermissionsService';

export class CameraPermissionsService implements PermissionsService {
  checkPermission(callback: (status: string) => void) {
    check(PERMISSIONS.ANDROID.CAMERA).then(result => {
      callback(result);
    });
  }

  requestPermission(callback: (status: string) => void) {
    request(PERMISSIONS.ANDROID.CAMERA).then(result => {
      callback(result);
    });
  }
}
