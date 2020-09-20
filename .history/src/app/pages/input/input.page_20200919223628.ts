import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  public name: string;

  public usuario = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('form submit');
  }
}
