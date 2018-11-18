import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, Observer } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class RestaurantService {
    svcUrl: string = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
    constructor(private http: Http) { }




    getRestaurants(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });        
        return this.http.get(this.svcUrl, options)
            .pipe(map(response => response.json()));
    };

}

@Injectable()
export class MessageService {
    private _listners = new Subject<any>();

    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    filter(filterBy: string) {
       this._listners.next(filterBy);
    }

}







