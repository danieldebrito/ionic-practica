import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {


  public albunes: any[] = [];
  public textoBuscar = '';  // texto para mandarle al pipe

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(
      albunes => {
        console.log(albunes);
        this.albunes = albunes;
      }
    );
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

}
