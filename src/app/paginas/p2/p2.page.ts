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

  constructor(private gestion: GestionService) { }

  ngOnInit() {
    this.persona = this.gestion.getPersona();
    console.log("personaaaaa + puntaje", this.persona);
    
    if (this.persona.sexo == "M") {
      switch (this.persona.puntaje) {
        case 0:
          break;
        case 2:
          break;
        default:
          break;
      }
    } else {

    }
  }



}
