import { NgModule } from '@angular/core';

import { SuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SuiviSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SuiviSharedCommonModule {}
