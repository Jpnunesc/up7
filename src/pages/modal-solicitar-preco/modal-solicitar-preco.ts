import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalSolicitarPrecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-solicitar-preco',
  templateUrl: 'modal-solicitar-preco.html',
})
export class ModalSolicitarPrecoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  closeModal() {
    this.navCtrl.pop();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSolicitarPrecoPage');
  }

}
