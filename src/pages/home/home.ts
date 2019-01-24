import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalenderPage } from '../calender/calender';
import { ContactPage } from '../contact/contact';
import { OrganisationPage } from '../organisation/organisation';
import { DocumentPage } from '../document/document';
import { YoutubePage} from '../youtube/youtube';
import { Page5Page } from '../page5/page5';
import { Page6Page } from '../page6/page6';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goCalender() {
    this.navCtrl.setRoot(CalenderPage);
    //this.navCtrl.push('CalenderPage');


  }

  goDocument() {
    this.navCtrl.setRoot(DocumentPage);

  }


  goYoutube() {
    this.navCtrl.setRoot(YoutubePage);

  }

  goContact() {
    this.navCtrl.setRoot(ContactPage);

  }

  goPage5(){
    this.navCtrl.setRoot(Page5Page);


  }

  goPage6(){
    this.navCtrl.setRoot(Page6Page);

    
  }

  goOrganisation()
  {
    this.navCtrl.setRoot(OrganisationPage);

  }
}
