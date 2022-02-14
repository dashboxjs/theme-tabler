import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DxGizmoConfig, DxOptionMarkdownDefinition, DxOptionSelectDefinition, DxOptionTextDefinition } from '@dashbox/common';
import { DxGizmo } from '@dashbox/core';
import { BASE_COLORS } from '../../../data/colors.data';
import { TextConfig } from './text.interfaces';

const TRANSLATION = '@theme.gizmos.text'

@Component({
  selector: 'tabler-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
@DxGizmo({
  nameTranslation: `${TRANSLATION}.name`,
  type: 'text',
  category: 'dataDisplay',
  commonlyUsed: true,
  options: [
    {
      nameTranslation: '@theme.groups.basic',
      options: [
        <DxOptionMarkdownDefinition> {
          key: 'text',
          type: 'markdown',
          nameTranslation: `${TRANSLATION}.options.text`,
          defaultValue: 'Text',
          overridable: true
        },
      ]
    },
    {
      nameTranslation: '@theme.groups.appearance',
      options: [
        <DxOptionSelectDefinition> {
          key: 'color',
          type: 'select',
          nameTranslation: `${TRANSLATION}.options.color`,
          defaultValue: 'none',
          overridable: true,
          values: ['none', ...BASE_COLORS].map((color) => ({
            value: color,
            labelTranslation: `@theme.colors.${color}`
          }))
        },
        // <DxOptionSelectDefinition> {
        //   key: 'type',
        //   type: 'select',
        //   nameTranslation: `${TRANSLATION}.options.type`,
        //   defaultValue: 'btn',
        //   values: BUTTON_TYPES.map((type) => ({
        //     value: type,
        //     labelTranslation: `${TRANSLATION}.options.types.${type}`
        //   }))
        // },
        // <DxOptionSelectDefinition> {
        //   key: 'shape',
        //   type: 'select',
        //   nameTranslation: `${TRANSLATION}.options.shape`,
        //   defaultValue: 'standard',
        //   values: BUTTON_SHAPES.map((shape) => ({
        //     value: shape,
        //     labelTranslation: `${TRANSLATION}.options.shapes.${shape}`
        //   }))
        // }
      ]
    }
  ]
})
export class TextComponent {

  @Input() config!: DxGizmoConfig<TextConfig>

}
