import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import  { Api} from "../../providers/api";
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
  newItem:any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:Api, public vw:ViewController) {}

  addItem(){
      this.newItem.time = new Date();
      this.api.itemshandler.store(this.newItem).subscribe(()=>{
        this.vw.dismiss();
      });
  }
  updatePercent(){
      this.newItem.percent = this.newItem.worker.percent; 
  }
  close(){
    this.vw.dismiss();
  }
}
