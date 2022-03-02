export interface AlertConfig {
  message: string;
  type: typeof ALERT_TYPES[number];
  title?: string;
  isImportant?: boolean;
  hasIcon?: boolean;
  isDismissible?: boolean;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
}

export const ALERT_TYPES = ['info', 'success', 'warning', 'danger'] as const;
