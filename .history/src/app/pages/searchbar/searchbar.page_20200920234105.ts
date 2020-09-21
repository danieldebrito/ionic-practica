import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {


  public albunes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  buscar(event) {
    this.dataService.getAlbumes().subscribe(
      albunes => {
        console.log(albunes);
        this.albunes = albunes;
      }
    );
  }

}
