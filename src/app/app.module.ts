import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Storage } from '@ionic/storage';
import { Api } from '../providers/api';
import {MomentModule} from 'angular2-moment';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';

export const   firebaseConfig = {
    apiKey: "AIzaSyCdjCKr5DXqMLXw5feG_RfW4PtMfiq7s2Q",
    authDomain: "lili-styles.firebaseapp.com",
    databaseURL: "https://lili-styles.firebaseio.com",
    storageBucket: "lili-styles.appspot.com",
    messagingSenderId: "911551807411"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    MomentModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage, Api]
})
export class AppModule {}
