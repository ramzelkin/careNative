import {check, request, PERMISSIONS} from 'react-native-permissions';
import {PermissionsService} from './PermissionsService';

export class PhotoLibraryPermissionsService implements PermissionsService {
  checkPermission(callback: (status: string) => void) {
    check(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY).then(result => {
      callback(result);
    });
  }

  requestPermission(callback: (status: string) => void) {
    request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY).then(result => {
      callback(result);
    });
  }
}
