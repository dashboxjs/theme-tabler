import { NgModule } from '@angular/core';
import { ThemeDefinition } from '@dashbox/common';
import { DxThemeModule } from '@dashbox/core';
import { ButtonComponent } from './gizmos/actions/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
  ]
})
export class DxThemeTablerModule extends DxThemeModule {

  definition: ThemeDefinition = {
    name: 'Tabler',
    version: '1.0.0',
    gizmos: {
      // Actions
      button: ButtonComponent
    }
  }

}
