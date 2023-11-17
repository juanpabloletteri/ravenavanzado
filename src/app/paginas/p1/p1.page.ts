import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  contador: number = 1;
  puntaje: number = 0;

  constructor() { }

  ngOnInit() {
  }

  elegirOpcion(opcion: number) {
    this.contador += 1;
  }

}
