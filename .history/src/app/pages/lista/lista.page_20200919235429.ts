import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  public favorite( user ){
    console.log( user );
  }

  public borrar( user ){
    console.log( user );
  }

  public share( user ){
    console.log( user );
  }
}
