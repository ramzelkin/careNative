import {
  PermissionsService,
  PermissionStatus,
} from '../../services/PermissionsService/PermissionsService';

export class ChooseOptionController {
  private permissionsService: PermissionsService;

  onPermissionsGranted = (): void => {};

  checkPermissions() {
    this.permissionsService.check((status: string) => {
      console.log(status);
      if (status === PermissionStatus.granted) {
        this.onPermissionsGranted();
      }
    });
  }

  constructor(permissionsService: PermissionsService) {
    this.permissionsService = permissionsService;
  }
}
