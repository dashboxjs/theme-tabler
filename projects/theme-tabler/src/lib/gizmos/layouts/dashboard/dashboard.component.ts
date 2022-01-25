import { Component } from '@angular/core';
import { GizmoDefinition } from '@dashbox/common';
import { DxThemeGizmoComponent } from '@dashbox/core';

@Component({
  selector: 'tabler-layout-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class LayoutDashboardComponent extends DxThemeGizmoComponent {

  definition: GizmoDefinition = {
    name: 'Layout - Dashboard',
    layout: true
  }

}
