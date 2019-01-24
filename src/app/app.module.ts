import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalenderPage } from '../pages/calender/calender';
import { ContactPage } from '../pages/contact/contact';
import { OrganisationPage } from '../pages/organisation/organisation';
import { DocumentPage } from '../pages/document/document';
import { YoutubePage} from '../pages/youtube/youtube';
import { Page5Page } from '../pages/page5/page5';
import { Page6Page } from '../pages/page6/page6';
import { Http, HttpModule } from '@angular/http';
import { RssProvider } from '../providers/rss/rss'; 
import { HttpClient, HttpParams, HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalenderPage,
    ContactPage,
    OrganisationPage,
    DocumentPage,
    YoutubePage,
    Page5Page,
    Page6Page,
  ],

 

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalenderPage,
    ContactPage,
    OrganisationPage,
    DocumentPage,
    YoutubePage,
    Page5Page,
    Page6Page
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssProvider
  ]
})
export class AppModule {}
