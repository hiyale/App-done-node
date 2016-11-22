import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable()
export class JsonParserService {
    jsondata:Object;
    constructor(private http: Http) {}

    fetchData(url:string){
      return this.http.get(url).map(
          (res) => res.json()
        );
    }
}