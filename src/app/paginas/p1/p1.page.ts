import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  contador: number = 0;
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

    if (opcion == this.respuestas[this.contador].correcta) {
      console.log("sumo 1 correcta");
      console.log("opcion-> ", opcion);
      console.log("correcta-> ", this.respuestas[this.contador].correcta);

      this.puntaje += 1;
    }
    else {
      console.log("INCORRECTA");
      console.log("opcion-> ", opcion);
      console.log("correcta-> ", this.respuestas[this.contador].correcta);

    }
    console.log("puntaje: ", this.puntaje);
    console.log("---------------");
    this.contador += 1;

  }

}
