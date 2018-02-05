import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSolicitarPrecoPage } from './modal-solicitar-preco';

@NgModule({
  declarations: [
    ModalSolicitarPrecoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSolicitarPrecoPage),
  ],
})
export class ModalSolicitarPrecoPageModule {}
