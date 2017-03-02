import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {
  AngularFireOffline,
  AfoListObservable,
  AfoObjectObservable } from 'angularfire2-offline';

@Injectable()
export class Api {

  constructor(public http: Http,public af: AngularFire) {
    console.log('Hello Api Provider');
  }

}
