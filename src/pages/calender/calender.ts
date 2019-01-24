import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http,HttpModule } from '@angular/http'; 
import { RssProvider } from '../../providers/rss/rss'
import 'rxjs/add/operator/map';
/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {
  rssDataArray: any = [];
  URL='https://mob.gbgfortaleza.com.br/category/agenda/feed/?';

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public rssprovider: RssProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalenderPage');
    this.GetRssData();
  }

  goBack() {
    this.navCtrl.setRoot(HomePage);

  }



  GetRssData()
  {
    this.rssprovider.getRSS().subscribe(
      data => {
        this.rssDataArray = data;
        console.log(data);
      }

    );

  }
}
