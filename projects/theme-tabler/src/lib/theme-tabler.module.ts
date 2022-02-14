import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxCommonModule } from '@dashbox/core';
import { DxTheme } from '@dashbox/core';
import { TranslateModule } from '@ngx-translate/core'
import { ContainerComponent } from './container/container.component';
import { ButtonComponent } from './gizmos/actions/button/button.component';
import { TextComponent } from './gizmos/data-displays/text/text.component';
import { LayoutHorizontalComponent } from './gizmos/layouts/horizontal/horizontal.component';

const gizmos = [
  // Actions
  ButtonComponent,

  // Data Displays,
  TextComponent,

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
    RouterModule,
    DxCommonModule,
    TranslateModule.forChild()
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
