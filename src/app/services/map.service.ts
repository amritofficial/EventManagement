import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MapService implements OnInit{
    data: Observable<any>;
    constructor(public http: Http) {}
    // private readonly API_URL = '../assets/data.json';
    type: string = 'restaurant';
    API_URL:string = 'https://nodejs-demo-189719.appspot.com/api/getPlaces/restaurant/food';
    ngOnInit() {
    
    }

    getTestData(){
        return this.http.get('../assets/test.json').map(res => res.json());
    }

    getData() {
        return this.http.get(this.API_URL).map(res => res.json());
    }

    getPlaces() {
        return this.http.get(this.API_URL).map((res:any) => res.json());
    }
}