import { Component } from '@angular/core';
import {AddItemPage } from '../add-item/add-item';
import { NavController,ModalController } from 'ionic-angular';
import {Api} from '../../providers/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newItem:any={worker: {}, value:0}
  defaultWorker = {}
  constructor(public navCtrl: NavController, public api:Api, public modal:ModalController) {
    
  }

  addItem(){
      this.modal.create(AddItemPage).present();
  }

  removeItem(item){
    this.api.itemshandler.remove(item);
  }


}
