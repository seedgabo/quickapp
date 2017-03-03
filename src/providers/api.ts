import { Injectable,NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {
    AngularFireOffline,
    AfoListObservable,
    AfoObjectObservable } from 'angularfire2-offline';

    @Injectable()
    export class Api {
        items: any;
        workers:any;
        vales: any;
        constructor(public http: Http,public af: AngularFire, public zone:NgZone) {
            this.init();
        }

        init(){
            this.items = this.af.database.list('/items',{
                query: {
                    orderByValue: true,
                    equalTo: { value: "Gabriel", key: 'worker' }
                }
            });

            this.workers = this.af.database.list('/workers');
            this.workers.subscribe((data)=>{
                console.table(data);
            });

            this.vales = this.af.database.list('/vales');
        }

    }
