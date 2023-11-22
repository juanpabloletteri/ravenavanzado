import { Component } from '@angular/core';
import { GestionService } from '../servicios/gestion.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*nombre: string = "";
  edad: number = 0;*/

  nombre!: string;
  edad!: number;
  sexo!: string;

  constructor(private alert: AlertController, private gestion: GestionService, public router: Router) { }

  ngOnInit() {
  }

  async seguir() {
    if (this.edad == null || this.nombre == "" || this.sexo == null) {
      console.log("dalta edad");

      const alert = await this.alert.create({
        header: "Aviso",
        message: "Debe ingresar su nombre, edad y sexo para continuar",
        buttons: ['Ok']
      });
      await alert.present();
    }
    else if (this.edad > 99 || this.edad < 15) {
      const alert = await this.alert.create({
        header: "Aviso",
        message: "Debe ingresar un rango valido de edad 15 a 99",
        buttons: ['Ok']
      });
      await alert.present();
    } else {
      this.gestion.setDatos(this.nombre, this.edad, this.sexo);
      this.router.navigate(['p1']);
    }
    console.log("nombre: ", this.nombre, "-- edad: ", this.edad);
  }

}
