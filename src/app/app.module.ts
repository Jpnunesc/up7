import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';





import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContatoPage } from '../pages/contato/contato';
import { ModalSolicitarPrecoPage } from '../pages/modal-solicitar-preco/modal-solicitar-preco';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { EventosPage } from '../pages/eventos/eventos';
import { EventosXPage } from '../pages/eventos-x/eventos-x';
import { SemiNovosPage } from '../pages/semi-novos/semi-novos';
import { DetalhesXPage } from '../pages/detalhes-x/detalhes-x';
import { MaisPage } from '../pages/mais/mais';



@NgModule({
  declarations: [

    MyApp,
    ContatoPage,
    ModalSolicitarPrecoPage,
    DetalhesPage,
    EventosPage,
    EventosXPage,
    SemiNovosPage,
    DetalhesXPage,
    MaisPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContatoPage,
    ModalSolicitarPrecoPage,
    DetalhesPage,
    EventosPage,
    EventosXPage,
    SemiNovosPage,
    DetalhesXPage,
    MaisPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
