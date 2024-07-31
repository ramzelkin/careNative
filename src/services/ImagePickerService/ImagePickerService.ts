import * as ImagePicker from 'react-native-image-picker';
import {MediaService} from './MediaService';

export class ImagePickerService implements MediaService {
  launchMedia(callback: (imageURI?: string, errorCode?: string) => void) {
    ImagePicker.launchImageLibrary(new Options()).then(
      (response: ImagePicker.ImagePickerResponse) => {
        if (
          response.assets &&
          response.assets.length > 0 &&
          response.assets[0].uri
        ) {
          let uri = response.assets[0].uri;

          callback(uri, undefined);
        } else if (response.errorCode) {
          callback(undefined, response.errorCode);
        } else {
          callback(undefined, undefined);
        }
      },
    );
  }
}

class Options implements ImagePicker.ImageLibraryOptions {
  selectionLimit? = 1;
  mediaType: ImagePicker.MediaType = 'photo';
  maxWidth?: number = undefined;
  maxHeight?: number = undefined;
  quality?: ImagePicker.PhotoQuality = 1;
  videoQuality?: ImagePicker.AndroidVideoOptions | ImagePicker.iOSVideoOptions =
    undefined;
  includeBase64?: boolean = undefined;
  includeExtra?: boolean = undefined;
  formatAsMp4?: boolean = undefined;
  presentationStyle?:
    | 'currentContext'
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'popover'
    | 'overFullScreen'
    | 'overCurrentContext' = 'fullScreen';
  assetRepresentationMode?: 'auto' | 'current' | 'compatible' = 'auto';
}
