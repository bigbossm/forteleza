import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient, HttpParams  } from '@angular/common/http';


/**
 * Generated class for the OrganisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-organisation',
  templateUrl: 'organisation.html',
})
export class OrganisationPage {
  private API_URL: string;
  rssDataArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.API_URL = "https://api.rss2json.com/v1/api.json";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganisationPage');
    this.GetRssData();

  }
  goBack() {
    this.navCtrl.setRoot(HomePage);
  }


  getRSS ()
  {

    //  const API_URL: any =  'https://api.rss2json.com/v1/api.json';
    //  const response = this.http.post(API_URL,{'rss_url': RSS_URL, 'api_key':API, 'count': count}).map( res => res.json()); return response;



         const params = { params: new HttpParams().set('rss_url', 'https://mob.gbgfortaleza.com.br/category/organizadores/feed/' ).set('api_key','nkhrtcjc4ubxiwemwlyk1sekh46d7woa9dylg5cv').set('order_by', 'pubDate').set('order_dir', 'asc')
        }
        return this.http.get(this.API_URL, params);
    
         
  }
  GetRssData()
  {
    this.getRSS().subscribe(
      data => {
        this.rssDataArray = data;
        console.log(data);
      }

    );

  }
}
