import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Mutant } from './xmen.schema';


@Injectable()
export class XMenService {

    constructor(private http: Http) { }

    getXMen(): Observable<Mutant[]> {
        return this.http.get('http://52.187.48.123/xmen/remote')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addMutant(mutant: any): Observable<Response> {
        console.log('New Mutant for POST', mutant)
        // return this.http.post('http://localhost:3001/xmen/remote',mutant)
        return this.http.post('http://52.187.48.123/xmen/remote',mutant)
            .map((res: Response) => {
                console.log('POST Response is: ', res)
                res.json()
            })
            .catch(this.handleError)
    }
    /**
      * Handle HTTP error
      */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}