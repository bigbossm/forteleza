import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  video: any = {
    url : 'https://www.youtube.com/embed/fJfJdItQzuc',
    title: 'Google Business Groups Stories Video',
    description :'Vídeo de apresentação do Google Business Group GBG Internacional'
};

constructor(public navCtrl: NavController,
            public loadingCtrl: LoadingController,
            private domSanitizer: DomSanitizer) {}

ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();
}

handleIFrameLoadEvent(): void {
    this.loading.dismiss();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubePage');
  }
  goBack() {
    this.navCtrl.setRoot(HomePage);

  }

  sanilize(vid)
  {
    //return this.dom.bypassSecurityTrustUrl(vid);
  }
}