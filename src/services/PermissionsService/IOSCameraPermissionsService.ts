import {check, PERMISSIONS} from 'react-native-permissions';
import {PermissionsService} from './PermissionsService';

export class IOSCameraPermissionsService implements PermissionsService {
  checkPermission(callback: (status: string) => void) {
    check(PERMISSIONS.IOS.CAMERA).then(result => {
      callback(result);
    });
  }

  requestPermission(callback: (status: string) => void) {
    callback('unavailable');
  }

  // checkPhotoLibraryPermission(callback: (status: string) => void) {
  //   check(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY).then(result => {
  //     callback(result);
  //   });
  // }

  // requestPhotoLibraryPermission(callback: (status: string) => void) {
  //   request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY).then(result => {
  //     callback(result);
  //   });
  // }

  // openDeviceSettings() {
  //   openSettings();
  // }
}
