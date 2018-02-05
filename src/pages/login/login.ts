import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';


import { DetalhesPage } from '../detalhes/detalhes';
import { EventosPage } from '../eventos/eventos';
import { SemiNovosPage } from '../semi-novos/semi-novos';
import { MaisPage } from '../mais/mais';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { 
  
  }
 public detalhes(){
   this.navCtrl.setRoot(DetalhesPage);
 }
 public eventos(){
  this.navCtrl.setRoot(EventosPage);
}
public seminovos(){
  this.navCtrl.setRoot(SemiNovosPage);
}
public antigos(){
  this.navCtrl.setRoot(LoginPage);
}
public mais(){
  this.navCtrl.setRoot(MaisPage);
}
 
  
}