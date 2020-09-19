import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  public titulo: string;

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('BOTON CANCELAR');
          }
        },
        {
          text: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('BOTON OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const input = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingrese su nombre :'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            this.titulo = data.txtNombre;
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await input.present();
  }
}

