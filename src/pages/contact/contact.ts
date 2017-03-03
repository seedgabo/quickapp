import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {Api} from '../../providers/api';
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    newWorker= {name:"",percent:60}
    constructor(public navCtrl: NavController, public api:Api, public alert:AlertController) {
        this.api.init();
    }

    addWorker(){
        this.alert.create({
            title:"Agregar Trabajador",
            inputs:[
                {
                    placeholder:"Nombre del Trabajador",
                    type:'text',
                    name:'name'
                },
                {
                    placeholder:"Porcentaje de Ganacia (%)",
                    type: 'number',
                    name:'percent'
                }
            ],
            buttons:[
                {
                    role: 'cancel',
                    text: "Cancelar"
                },
                {
                    handler: (data)=>{
                        if (data.name !="" && data.percent > 0 && data.percent <= 100) {
                            this.api.workers.push(data);
                        }
                    },
                    text: "Guardar"
                },
            ]


        }).present();
    }

    deleteWorker(worker){
        this.api.workers.remove(worker.$key);
    }
}
