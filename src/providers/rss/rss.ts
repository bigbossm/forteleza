import { HttpClient, HttpParams  } from '@angular/common/http';
import { Http,HttpModule } from '@angular/http'; 
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RssProvider {
  private API_URL: string;

  constructor(public http: HttpClient) {
    console.log('Hello RssProvider Provider');
    this.API_URL = "https://api.rss2json.com/v1/api.json";

  }
  getRSS ()
  {
      const RSS_URL: any='https://mob.gbgfortaleza.com.br/category/agenda/feed/?';
      const API: any = 'nkhrtcjc4ubxiwemwlyk1sekh46d7woa9dylg5cv';
      const count: any= 20;
    //  const API_URL: any =  'https://api.rss2json.com/v1/api.json';
    //  const response = this.http.post(API_URL,{'rss_url': RSS_URL, 'api_key':API, 'count': count}).map( res => res.json()); return response;



         const params = { params: new HttpParams().set('rss_url', 'https://mob.gbgfortaleza.com.br/category/agenda/feed/?' ).set('api_key','nkhrtcjc4ubxiwemwlyk1sekh46d7woa9dylg5cv').set('order_by', 'pubDate').set('order_dir', 'asc')
        }
        return this.http.get(this.API_URL, params);
    
         
  }
}
