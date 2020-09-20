import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        firstName: 'Daniel',
        lastName: 'de Brito',
        middleInitial: 'DRB'
      }
    });
    return await modal.present();
  }

}
