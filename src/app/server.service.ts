import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    stroreServer(servers: any[]){
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        //return this.http.post('https://angular-http-8d920.firebaseio.com/data.json',servers,{headers:headers});
        return this.http.put('https://angular-http-8d920.firebaseio.com/data.json',servers,{headers:headers});
    }

    getServers(){
        return this.http.get('https://angular-http-8d920.firebaseio.com/data')
        .map((response: Response)=>{
            const data = response.json()
            return data
        })
        .catch(
            (response: Response)=>{
                return Observable.throw('something went wrong')
            }
        )
    }
    getAppName(){
        return this.http.get('https://angular-http-8d920.firebaseio.com/appName.json')
        .map(
            (response: Response) => {
                return response.json()
            }
        )
    }
}