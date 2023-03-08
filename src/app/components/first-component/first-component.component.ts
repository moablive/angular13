import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
    name: string = 'Guilherme';
    age: number = 25;
    job: string = 'DEV';
    hobbies = ['correr','estudar','comer']
    car = {
      name: 'POLO',
      year: 2019
    }

  constructor() { }

  ngOnInit(): void {

  }

}
