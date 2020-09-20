import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  public loading: any;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {

    setTimeout(() => {
      this.loading.dismiss();
    }, 2500);

    this.presentLoading('Momento...');
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message
      // duration: 2000
    });
    return this.loading.present();
  }
}
