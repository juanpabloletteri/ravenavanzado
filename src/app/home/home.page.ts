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
    if (this.edad == null || this.nombre == "") {
      console.log("dalta edad");

      const alert = await this.alert.create({
        header: "Aviso",
        message: "Debe ingresar su nombre y edad para continuar",
        buttons: ['Ok']
      });
      await alert.present();
    } else {
      alert("seguir");
      this.gestion.setDatos(this.nombre, this.edad, "M");
      this.router.navigate(['p1']);
    }
    console.log("nombre: ", this.nombre, "-- edad: ", this.edad);
  }

}
