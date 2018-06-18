import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FooPage } from './foo';

@NgModule({
  declarations: [
    FooPage,
  ],
  imports: [
    IonicPageModule.forChild(FooPage),
  ],
})
export class FooPageModule {}
