import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componentes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [];

  constructor( private menuController: MenuController ) { }

  ngOnInit() {
  }

  toogleMenu(){
    this.menuController.toggle();
  }

}

