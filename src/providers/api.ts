import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import Horizon from "@horizon/client";
import * as moment from 'moment';
import 'moment/min/locales';
moment.locale("es");
console.log(moment.locale());
@Injectable()
export class Api {
    itemshandler: any;
    items: any;

    workershandler: any;
    workers: any;

    vales: any;
    constructor(public http: Http, public zone: NgZone) {
        this.init();
    }

    init() {
        const hz = Horizon({ host: 'localhost:8181' });
        hz.connect({
            host: "localhost:8181"
        });

        hz.onReady(() => {

            this.workershandler = hz('workers');

            this.workershandler.watch().subscribe(
                (workers) => {
                    this.workers = workers;
                },
                (err) => {
                    console.error(err);
                }
            );

            this.itemshandler = hz('items');
            this.itemshandler.order("time","descending").limit(200).watch().subscribe(
                (items) => {
                    this.items = items;
                },
                (err) => {
                    console.error(err);
                }
            );

        });
    }

}
