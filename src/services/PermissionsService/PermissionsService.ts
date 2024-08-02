export const PermissionStatus = Object.freeze({
  unavailable: 'unavailable',
  blocked: 'blocked',
  denied: 'denied',
  granted: 'granted',
  limited: 'limited',
} as const);

export type ResultMap = typeof PermissionStatus;

export interface PermissionsService {
  checkPermission: (callback: (status: string) => void) => void;
  requestPermission: (callback: (status: string) => void) => void;
}
