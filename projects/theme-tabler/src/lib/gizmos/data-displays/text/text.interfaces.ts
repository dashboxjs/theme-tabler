import { BASE_COLORS } from '../../../data/colors.data';

export interface TextConfig {
  text: string;
  color: typeof BASE_COLORS[number];
  align: typeof TEXT_ALIGNS[number];
}

export const TEXT_ALIGNS = ['left', 'center', 'right'] as const;
