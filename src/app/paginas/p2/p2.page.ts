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
    //console.log("personaaaaa + puntaje", this.persona);

    //si es masculino
    if (this.persona.sexo == "M") {
      if (this.persona.puntaje >= 0 && this.persona.puntaje <= 14) {
        this.percentil = 5;
      } else if (this.persona.puntaje > 14 && this.persona.puntaje <= 17) {
        this.percentil = 10;
      } else if (this.persona.puntaje > 17 && this.persona.puntaje <= 21) {
        this.percentil = 25;
      } else if (this.persona.puntaje > 21 && this.persona.puntaje <= 24) {
        this.percentil = 50;
      } else if (this.persona.puntaje > 24 && this.persona.puntaje <= 28) {
        this.percentil = 75;
      } else if (this.persona.puntaje > 28 && this.persona.puntaje <= 30) {
        this.percentil = 90;
      } else if (this.persona.puntaje > 30 && this.persona.puntaje <= 32) {
        this.percentil = 95;
      }

      //si es femenino
    } else {
      if (this.persona.puntaje >= 0 && this.persona.puntaje <= 15) {
        this.percentil = 5;
      } else if (this.persona.puntaje > 15 && this.persona.puntaje <= 17) {
        this.percentil = 10;
      } else if (this.persona.puntaje > 17 && this.persona.puntaje <= 20) {
        this.percentil = 25;
      } else if (this.persona.puntaje > 20 && this.persona.puntaje <= 23) {
        this.percentil = 50;
      } else if (this.persona.puntaje > 23 && this.persona.puntaje <= 26) {
        this.percentil = 75;
      } else if (this.persona.puntaje > 26 && this.persona.puntaje <= 29) {
        this.percentil = 90;
      } else if (this.persona.puntaje > 29 && this.persona.puntaje <= 30) {
        this.percentil = 95;
      }
    }
    //texto asignado
    if (this.percentil == 5) {
      this.textoPercentil = "malisimo";
    } else if (this.percentil == 10) {
      this.textoPercentil == "no tan malo";
    } else if (this.percentil == 25) {
      this.textoPercentil == "no tan malo";
    } else if (this.percentil == 50) {
      this.textoPercentil == "no tan malo";
    } else if (this.percentil == 75) {
      this.textoPercentil == "no tan malo";
    } else if (this.percentil == 90) {
      this.textoPercentil == "muy bueno";
    } else if (this.percentil == 95) {
      this.textoPercentil == "excelente";
    }


    console.log("PERCENTIL-> ", this.percentil, "texto-> ", this.textoPercentil);
    console.log("persona-> ", this.persona);
  }

  reiniciar(): void {
    this.gestion.borrarDatos();
    console.log("borrar?");
  }

}
