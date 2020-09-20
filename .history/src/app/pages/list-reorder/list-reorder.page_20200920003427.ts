import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {



  public ramones = ['joey', 'johnny', 'marky', 'cj', 'dee dee', 'tommy'];

  constructor() { }

  ngOnInit() {
  }

  public reorder(event){
    const itemRemver = this.ramones.splice( event.detail.from, 1 ) [0];
    this.ramones.splice( event.detail.to, 0, itemRemver );
    event.detail.complete();
  }
}
