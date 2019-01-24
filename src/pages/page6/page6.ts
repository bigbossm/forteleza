import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the Page6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html',
})
export class Page6Page {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page6Page');

  }
  goBack() {
    this.navCtrl.setRoot(HomePage);

  }


 
}
