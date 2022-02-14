import { Component } from '@angular/core';
import { DxGizmo } from '@dashbox/core';

@Component({
  selector: 'tabler-layout-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
@DxGizmo({
  type: 'layout-horizontal',
  nameTranslation: 'Horizontal',
  category: 'layout',
  layout: true
})
export class LayoutHorizontalComponent {

}
