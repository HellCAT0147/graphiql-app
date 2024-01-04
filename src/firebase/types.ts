export interface ResetResponse {
  success: boolean;
}

export const errorTemplate: Error = {
  name: 'error',
  message: 'Unexpected error',
};
