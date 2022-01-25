import { Component } from '@angular/core';
import { DxGizmoButtonConfig, GizmoDefinition } from '@dashbox/common';
import { DxThemeGizmoComponent } from '@dashbox/core';

@Component({
  selector: 'tabler-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends DxThemeGizmoComponent<DxGizmoButtonConfig> {

  definition: GizmoDefinition = {
    name: 'Button'
  }

}
