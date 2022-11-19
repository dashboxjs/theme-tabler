import { Component, Input } from '@angular/core';
import {
  DxGizmoConfig,
  DxOptionMarkdownDefinition,
  DxOptionSelectDefinition,
} from '@dashbox/common';
import { DxGizmo } from '@dashbox/core';

import { BASE_COLORS } from '../../../data/colors.data';
import { TEXT_ALIGNS, TextConfig } from './text.interfaces';

const TRANSLATION = '@theme.gizmos.text';

@Component({
  selector: 'tabler-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
@DxGizmo({
  nameTranslation: `${TRANSLATION}.name`,
  searchStringTranslation: `${TRANSLATION}.searchString`,
  type: 'text',
  category: 'dataDisplay',
  icon: 'language',
  commonlyUsed: true,
  options: [
    {
      nameTranslation: '@theme.groups.basic',
      options: [
        <DxOptionMarkdownDefinition>{
          key: 'text',
          type: 'markdown',
          nameTranslation: `${TRANSLATION}.options.text`,
          defaultValue: 'Text',
          required: true,
        },
      ],
    },
    {
      nameTranslation: '@theme.groups.appearance',
      options: [
        <DxOptionSelectDefinition>{
          key: 'color',
          type: 'select',
          nameTranslation: `${TRANSLATION}.options.color`,
          defaultValue: 'none',
          required: true,
          values: ['none', ...BASE_COLORS].map((color) => ({
            value: color,
            labelTranslation: `@theme.colors.${color}`,
          })),
        },
        <DxOptionSelectDefinition>{
          key: 'align',
          type: 'select',
          nameTranslation: `${TRANSLATION}.options.align`,
          defaultValue: 'left',
          required: true,
          values: TEXT_ALIGNS.map((align) => ({
            value: align,
            labelTranslation: `@theme.directions.${align}`,
          })),
        },
      ],
    },
  ],
})
export class TextComponent {
  @Input() config!: DxGizmoConfig<TextConfig>;
}
