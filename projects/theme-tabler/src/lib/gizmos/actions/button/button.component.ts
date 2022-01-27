import { Component, Input } from '@angular/core';
import { DxGizmoButtonConfig } from '@dashbox/common';
import { DxGizmo } from '@dashbox/core';

@Component({
  selector: 'tabler-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
@DxGizmo({
  name: 'Button',
  type: 'button',
  category: 'action',
  commonlyUsed: true
})
export class ButtonComponent {

  @Input() config!: DxGizmoButtonConfig

}
