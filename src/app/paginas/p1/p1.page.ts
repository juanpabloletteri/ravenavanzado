import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  contador: number = 1;
  puntaje: number = 0;
  respuestas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRespuestas().subscribe(res => {
      this.respuestas = res;
      console.log("respuetas", this.respuestas);
    });
  }

  getRespuestas() {
    return this.http
      .get("assets/respuestas.json")
      .pipe(
        map((res: any) => {
          return res;
        })
      )
  }

  elegirOpcion(opcion: number) {
    this.contador += 1;
  }

}
