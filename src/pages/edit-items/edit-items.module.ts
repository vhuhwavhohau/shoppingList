import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemsPage } from './edit-items';

@NgModule({
  declarations: [
    EditItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemsPage),
  ],
})
export class EditItemsPageModule {}
