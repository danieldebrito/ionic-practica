import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getUsers().subscribe(
      console.log
    );
  }
}
