import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { GestionService } from 'src/app/servicios/gestion.service';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  persona = new Persona();
  texto!: string;
  percentil!: number;
  textoPercentil!: string;

  constructor(private gestion: GestionService) { }

  ngOnInit() {
    this.persona = this.gestion.getPersona();
    console.log("personaaaaa + puntaje", this.persona);

    if (this.persona.sexo == "M") {
      if (this.persona.puntaje >= 0 && this.persona.puntaje <= 14) {
        this.percentil = 5;
        this.textoPercentil = "malisimo";
      } else if (this.persona.puntaje > 14 && this.persona.puntaje <= 17) {
        this.percentil = 10;
        this.textoPercentil = "no tan malo";
      } else if (this.persona.puntaje > 17 && this.persona.puntaje <= 21) {
        this.percentil = 25;
        this.textoPercentil = "mejoranodo";
      } else if (this.persona.puntaje > 21 && this.persona.puntaje <= 24) {
        this.percentil = 50;
        this.textoPercentil = "no tan malo";
      } else if (this.persona.puntaje > 24 && this.persona.puntaje <= 28) {
        this.percentil = 75;
        this.textoPercentil = "no tan malo";
      } else if (this.persona.puntaje > 28 && this.persona.puntaje <= 30) {
        this.percentil = 90;
        this.textoPercentil = "no tan malo";
      } else if (this.persona.puntaje > 30 && this.persona.puntaje <= 32) {
        this.percentil = 95;
        this.textoPercentil = "no tan malo";
      }


    } else {

    }
    console.log("PERCENTIL-> ", this.percentil, "texto-> ", this.textoPercentil);
  }

  reiniciar(): void {
    this.gestion.borrarDatos();
    console.log("borrar?");
  }

}
