import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  public ramnones = ['joey', 'johnny', 'marky', 'cj', 'dee dee', 'tommy'];

  constructor() { }

  ngOnInit() {
  }

}
