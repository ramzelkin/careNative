export interface MediaService {
  launchMedia: (
    callback: (imageURI?: string, errorCode?: string) => void,
  ) => void;
}
