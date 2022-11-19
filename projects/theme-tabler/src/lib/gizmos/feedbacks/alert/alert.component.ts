import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  DxGizmoConfig,
  DxOptionMarkdownDefinition,
  DxOptionSelectDefinition,
  DxOptionSwitchDefinition,
  DxOptionTextDefinition,
} from '@dashbox/common';
import { DxGizmo } from '@dashbox/core';

import { ALERT_TYPES, AlertConfig } from './alert.interfaces';

const TRANSLATION = '@theme.gizmos.alert';

@Component({
  selector: 'tabler-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
@DxGizmo({
  nameTranslation: `${TRANSLATION}.name`,
  searchStringTranslation: `${TRANSLATION}.searchString`,
  type: 'alert',
  icon: 'alert-circle',
  category: 'feedback',
  commonlyUsed: false,
  options: [
    {
      nameTranslation: '@theme.groups.basic',
      options: [
        <DxOptionSelectDefinition>{
          key: 'type',
          type: 'select',
          nameTranslation: `${TRANSLATION}.options.type`,
          defaultValue: 'info',
          required: true,
          values: ALERT_TYPES.map((type) => ({
            value: type,
            labelTranslation: `@theme.states.${type}`,
          })),
        },
        <DxOptionTextDefinition>{
          key: 'title',
          type: 'text',
          nameTranslation: `${TRANSLATION}.options.title`,
          defaultValue: 'Wow! Everything worked!',
          required: true,
        },
        <DxOptionMarkdownDefinition>{
          key: 'message',
          type: 'markdown',
          nameTranslation: `${TRANSLATION}.options.message`,
          defaultValue: '',
        },
        <DxOptionSwitchDefinition>{
          key: 'hasIcon',
          type: 'switch',
          nameTranslation: `${TRANSLATION}.options.hasIcon`,
          defaultValue: true,
        },
        <DxOptionSwitchDefinition>{
          key: 'isImportant',
          type: 'switch',
          nameTranslation: `${TRANSLATION}.options.isImportant`,
          defaultValue: false,
        },
        <DxOptionSwitchDefinition>{
          key: 'isDismissible',
          type: 'switch',
          nameTranslation: `${TRANSLATION}.options.isDismissible`,
          defaultValue: false,
        },
      ],
    },
    {
      nameTranslation: '@theme.groups.interactions',
      options: [
        <DxOptionTextDefinition>{
          key: 'primaryButtonLabel',
          type: 'text',
          nameTranslation: `${TRANSLATION}.options.primaryButtonLabel`,
          defaultValue: '',
        },
        <DxOptionTextDefinition>{
          key: 'secondaryButtonLabel',
          type: 'text',
          nameTranslation: `${TRANSLATION}.options.secondaryButtonLabel`,
          defaultValue: '',
        },
      ],
    },
  ],
  inputs: [
    {
      key: 'dismissed',
      nameTranslation: `${TRANSLATION}.inputs.dismissed`,
    },
  ],
  outputs: [
    {
      key: 'primaryButtonClick',
      nameTranslation: `${TRANSLATION}.outputs.primaryButtonClick`,
    },
    {
      key: 'secondaryButtonClick',
      nameTranslation: `${TRANSLATION}.outputs.secondaryButtonClick`,
    },
    {
      key: 'dismiss',
      nameTranslation: `${TRANSLATION}.outputs.dismiss`,
    },
  ],
})
export class AlertComponent {
  @Input() config!: DxGizmoConfig<AlertConfig>;

  @Input() dismissed: boolean = false;

  @Output() dismiss = new EventEmitter<void>();

  @Output() primaryButtonClick = new EventEmitter<void>();

  @Output() secondaryButtonClick = new EventEmitter<void>();

  typesIcons: Record<typeof ALERT_TYPES[number], string> = {
    info: 'info-circle',
    success: 'check',
    warning: 'alert-triangle',
    danger: 'alert-circle',
  };

  get iconName(): string {
    return this.typesIcons[this.config.options.type];
  }

  public onDismiss(): void {
    this.dismissed = true;
    this.dismiss.emit();
  }
}
