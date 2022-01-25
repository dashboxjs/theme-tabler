import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeDefinition } from '@dashbox/common';
import { DxThemeModule } from '@dashbox/core';
import { ButtonComponent } from './gizmos/actions/button/button.component';
import { LayoutDashboardComponent } from './gizmos/layouts/dashboard/dashboard.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LayoutDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DxThemeTablerModule extends DxThemeModule {

  definition: ThemeDefinition = {
    name: 'Tabler',
    version: '1.0.0',
    gizmos: {
      // Actions
      button: ButtonComponent,

      // Layouts
      'layout-dashboard': LayoutDashboardComponent
    }
  }

}
