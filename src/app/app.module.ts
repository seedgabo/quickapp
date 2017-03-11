import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AddItemPage} from '../pages/add-item/add-item';
import { Storage } from '@ionic/storage';
import { Api } from '../providers/api';
import {MomentModule} from 'angular2-moment';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage, Api]
})
export class AppModule {}
