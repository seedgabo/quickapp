import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Api} from '../../providers/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newItem:any={worker: {}, value:0}
  defaultWorker = {}
  constructor(public navCtrl: NavController, public api:Api) {
      this.api.workers.subscribe((workers)=>{
          this.defaultWorker = workers[0];
          this.newItem.worker = this.defaultWorker;
      })
  }

  addItem(){
      console.log(this.newItem)
      var data = {
          worker: this.newItem.worker.name,
          percent: this.newItem.worker.percent,
          value: this.newItem.value
      }
      this.api.items.push(data);
      this.newItem = {worker: this.defaultWorker, value:0};
  }

  removeItem(item){
      this.api.items.remove(item.$key);
  }

}
