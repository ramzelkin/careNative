import {MediaService} from '../../services/ImagePickerService/MediaService';
import {
  PermissionsService,
  PermissionStatus,
} from '../../services/PermissionsService/PermissionsService';
import {SettingsService} from '../../services/SettingsService/SettingsService';
import { NativeModules } from 'react-native';
const { TextRecognition } = NativeModules;

export class ChooseOptionController {
  private cameraPermissionsService: PermissionsService;
  private photoLibraryPermissionsService: PermissionsService;
  private settingsService: SettingsService;
  private mediaService: MediaService;

  constructor(
    cameraPermissionsService: PermissionsService,
    photoLibraryPermissionsService: PermissionsService,
    settingsService: SettingsService,
    mediaService: MediaService,
  ) {
    this.cameraPermissionsService = cameraPermissionsService;
    this.photoLibraryPermissionsService = photoLibraryPermissionsService;
    this.settingsService = settingsService;
    this.mediaService = mediaService;
  }

  private processMediaServiceResponse = (
    imageURI?: string,
    errorCode?: string,
  ): void => {
    if (imageURI) {
      let recognizer = new TextRecognition();

      recognizer.recognizeText(imageURI, (string[]?, Error?) => {
        
      });
      console.log(imageURI);
      // process image
    } else if (errorCode) {
      // process error
    } else {
      // do nothing, user canceled
    }
  };

  onPermissionsPhotoLibraryGranted = (): void => {
    this.mediaService.launchMedia((imageURI?: string, errorCode?: string) => {
      this.processMediaServiceResponse(imageURI, errorCode);
    });
  };

  onPermissionsCameraGranted = (): void => {
    this.mediaService.launchCamera((imageURI?: string, errorCode?: string) => {
      this.processMediaServiceResponse(imageURI, errorCode);
    });
  };

  onPermissionsDenied = (): void => {
    this.settingsService.openSettings();
  };

  onPermissionsLimited = (): void => {};
  onPermissionsUnavailable = (): void => {};
  onPermissionsBlocked = (): void => {};

  private checkPermission(
    verify: (callback: (status: string) => void) => void,
    onGranted: () => void,
    onDenied: () => void = () => {},
    onBlocked: () => void = () => {},
  ) {
    verify((status: string) => {
      switch (status) {
        case PermissionStatus.granted:
          onGranted();
          break;
        case PermissionStatus.denied:
          onDenied();
          break;
        case PermissionStatus.limited:
          this.onPermissionsLimited();
          break;
        case PermissionStatus.unavailable:
          this.onPermissionsUnavailable();
          break;
        case PermissionStatus.blocked:
          onBlocked();
          break;
      }
    });
  }

  setupCamera() {
    this.checkPermission(
      this.cameraPermissionsService.checkPermission,
      this.onPermissionsCameraGranted,
      () => {
        this.checkPermission(
          this.cameraPermissionsService.requestPermission,
          this.onPermissionsCameraGranted,
        );
      },
      this.onPermissionsBlocked,
    );
  }

  setupImageLibrary() {
    this.checkPermission(
      this.photoLibraryPermissionsService.checkPermission,
      this.onPermissionsPhotoLibraryGranted,
      () => {
        this.checkPermission(
          this.photoLibraryPermissionsService.requestPermission,
          this.onPermissionsPhotoLibraryGranted,
        );
      },
      this.onPermissionsBlocked,
    );
  }
}
