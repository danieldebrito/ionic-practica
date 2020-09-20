import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public usuarios: Observable<any>;

  @ViewChild('lista') lista: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  public favorite(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

  public borrar(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

  public share(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }
}
