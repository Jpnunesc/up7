import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContatoPage } from '../pages/contato/contato';
import { LoginPage } from '../pages/login/login';









@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;
 
  
    pagina: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }   
    // ];

  }
  
 
 

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.splashScreen.hide();
    });
  }
  

  openPage(idPage: Number) {
    switch(idPage){
      case 1:
      this.pagina = LoginPage ;
      break;
   
      case 6:
      this.pagina = ContatoPage;
      break;
    }
    this.nav.setRoot(this.pagina);
  } 
}
