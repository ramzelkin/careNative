import {check, PERMISSIONS} from 'react-native-permissions';
import {PermissionsService} from './PermissionsService';

export class IOSPermissionsService implements PermissionsService {
  check(callback: (status: string) => void) {
    check(PERMISSIONS.IOS.CAMERA).then(result => {
      callback(result);
    });
  }
  request(callback: (status: string) => void) {
    callback('');
  }
}

//   Permissions.check('camera').then((response: string) => {
//     if (response === 'authorized') {
//       // Permission is already granted
//     } else {
//       Permissions.request('camera').then((response: string) => {
//         if (response === 'authorized') {
//           // Permission is now granted
//         } else {
//           // Permission was denied
//         }
//       });
//     }
//   });
// }
