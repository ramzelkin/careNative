import {
  PermissionsService,
  PermissionStatus,
} from '../../services/PermissionsService/PermissionsService';

export class ChooseOptionController {
  private permissionsService: PermissionsService;

  constructor(permissionsService: PermissionsService) {
    this.permissionsService = permissionsService;
  }

  onPermissionsGranted = (): void => {};
  onPermissionsDenied = (): void => {};
  onPermissionsLimited = (): void => {};
  onPermissionsUnavailable = (): void => {};
  onPermissionsBlocked = (): void => {};

  checkPermissions() {
    this.permissionsService.check((status: string) => {
      console.log(status);
      if (status === PermissionStatus.granted) {
        this.onPermissionsGranted();
      }
      if (status === PermissionStatus.denied) {
        this.onPermissionsDenied();
      }
      if (status === PermissionStatus.limited) {
        this.onPermissionsLimited();
      }
      if (status === PermissionStatus.unavailable) {
        this.onPermissionsUnavailable();
      }
      if (status === PermissionStatus.blocked) {
        this.onPermissionsBlocked();
      }
    });
  }
}
