import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioModalPageRoutingModule } from './calendario-modal-routing.module';

import { CalendarioModalPage } from './calendario-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioModalPageRoutingModule
  ],
  declarations: [CalendarioModalPage]
})
export class CalendarioModalPageModule {}
