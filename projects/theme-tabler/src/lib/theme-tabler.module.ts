import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxTheme } from '@dashbox/core';
import { ContainerComponent } from './container/container.component';
import { ButtonComponent } from './gizmos/actions/button/button.component';
import { LayoutHorizontalComponent } from './gizmos/layouts/horizontal/horizontal.component';

const gizmos = [
  // Actions
  ButtonComponent,

  // Layouts
  LayoutHorizontalComponent
]

@NgModule({
  declarations: [
    ContainerComponent,
    ...gizmos
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
@DxTheme({
  name: 'Tabler',
  version: '1.0.0',
  container: ContainerComponent,
  gizmos
})
export class DxThemeTablerModule {

}
