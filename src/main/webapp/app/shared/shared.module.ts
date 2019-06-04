import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SuiviSharedLibsModule, SuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SuiviSharedLibsModule, SuiviSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuiviSharedModule {
  static forRoot() {
    return {
      ngModule: SuiviSharedModule
    };
  }
}
