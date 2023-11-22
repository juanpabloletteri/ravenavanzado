import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Persona } from 'src/app/clases/persona';
import { GestionService } from 'src/app/servicios/gestion.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  contador: number = 0;
  puntaje: number = 0;
  respuestas: any[] = [];
  persona = new Persona();

  constructor(private http: HttpClient, private gestion: GestionService, private router: Router) { }

  ngOnInit() {
    this.getRespuestas().subscribe(res => {
      this.respuestas = res;
      this.persona = this.gestion.getPersona();
      //console.log("gestion", this.persona);
      //console.log("getpersona", this.gestion.getPersona());
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

    if (this.contador == 35) {
      this.gestion.setPuntaje(this.puntaje);
      this.router.navigate(['p2']);
    } else if (opcion == this.respuestas[this.contador].correcta) {
      //console.log("sumo 1 correcta");
      //console.log("opcion-> ", opcion);
      //console.log("correcta-> ", this.respuestas[this.contador].correcta);
      this.puntaje += 1;
    }
    /* else {
       console.log("INCORRECTA");
       console.log("opcion-> ", opcion);
       console.log("correcta-> ", this.respuestas[this.contador].correcta);
 
     }
     console.log("puntaje: ", this.puntaje);
     console.log("---------------");*/
    this.contador += 1;

  }

  probar(): void {
    this.gestion.setPuntaje(this.puntaje);
  }

}
