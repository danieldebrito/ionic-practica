import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componentes } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componentes[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService
     ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  toogleMenu(){
    this.menuController.toggle();
  }

}

