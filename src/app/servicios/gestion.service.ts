import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Persona } from '../clases/persona';


@Injectable({
  providedIn: 'root'
})
export class GestionService {

  baremo: any[] = [];
  persona = new Persona();

  constructor(private http: HttpClient) { }

  getBaremo() {
    return this.http
      .get("assets/baremo.json")
      .pipe(
        map((res: any) => {
          return res;
        })
      )
  }

  setPuntaje(puntos: number): void {
    this.persona.puntaje = puntos;
  }

  setDatos(nombre: string, edad: number, sexo: string) {
    this.persona.nombre = nombre;
    this.persona.edad = edad;
    this.persona.sexo = sexo;
  }

  getPersona() {
    return this.persona;
  }

  borrarDatos(): void {
    this.persona = new Persona();
  }
}
