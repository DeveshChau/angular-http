import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    stroreServer(servers: any[]){
        return this.http.post('https://angular-http-8d920.firebaseio.com/data.json',servers);
    }
}