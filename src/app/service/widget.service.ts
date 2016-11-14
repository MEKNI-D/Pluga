import { Injectable, Inject } from "@angular/core"
import { Http, Response,  RequestOptions, Headers, Request, RequestMethod } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { Widget } from './widget';
import 'rxjs/Rx'

@Injectable()
export class WidgetService{

    constructor(private http: Http){
            this.http = http
    }
    private endpoint_url = "https://demo4475807.mockable.io/templates_by_apps";
    getAllWidgets():any{

        return this.http
         .get(this.endpoint_url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
      /* return this.http.get('http://date.jsontest.com').map(res=>res.json()
           .catch(this.handleError));*/
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}