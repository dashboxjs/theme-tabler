import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  DxGizmoConfig,
  DxOptionSelectDefinition,
  DxOptionTextDefinition,
} from '@dashbox/common';
import { DxGizmo } from '@dashbox/core';

import { BUTTON_SHAPES, BUTTON_TYPES, ButtonConfig, BUTTON_COLORS } from './button.interfaces';

const TRANSLATION = '@theme.gizmos.button';

@Component({
  selector: 'tabler-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
@DxGizmo({
  nameTranslation: `${TRANSLATION}.name`,
  searchStringTranslation: `${TRANSLATION}.searchString`,
  type: 'button',
  category: 'action',
  icon: 'click',
  commonlyUsed: true,
  options: [
    {
      nameTranslation: '@theme.groups.basic',
      options: [
        <DxOptionTextDefinition>{
          key: 'label',
          type: 'text',
          nameTranslation: `${TRANSLATION}.options.label`,
          defaultValue: 'Button',
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
          defaultValue: 'blue',
          values: BUTTON_COLORS.map((color) => ({
            value: color,
            labelTranslation: `@theme.colors.${color}`,
          })),
        },
        <DxOptionSelectDefinition>{
          key: 'type',
          type: 'select',
          nameTranslation: `${TRANSLATION}.options.type`,
          defaultValue: 'btn',
          values: BUTTON_TYPES.map((type) => ({
            value: type,
            labelTranslation: `${TRANSLATION}.options.types.${type}`,
          })),
        },
        <DxOptionSelectDefinition>{
          key: 'shape',
          type: 'select',
          nameTranslation: `${TRANSLATION}.options.shape`,
          defaultValue: 'standard',
          values: BUTTON_SHAPES.map((shape) => ({
            value: shape,
            labelTranslation: `${TRANSLATION}.options.shapes.${shape}`,
          })),
        },
      ],
    },
  ],
  outputs: [
    {
      key: 'buttonClick',
      nameTranslation: `${TRANSLATION}.outputs.click`,
    },
  ],
})
export class ButtonComponent {
  @Input() config!: DxGizmoConfig<ButtonConfig>;

  @Output() buttonClick = new EventEmitter<void>();
}
