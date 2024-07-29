export const PermissionStatus = Object.freeze({
  unavailable: 'unavailable',
  blocked: 'blocked',
  denied: 'denied',
  granted: 'granted',
  limited: 'limited',
} as const);

export type ResultMap = typeof PermissionStatus;

export interface PermissionsService {
  check: (callback: (status: string) => void) => void;
  request: (callback: (status: string) => void) => void;
}
