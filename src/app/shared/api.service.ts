import {Injectable, Inject} from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../app.config';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


export interface IMongoQueryInput {
  query? : string;
  select? : string;
  populate? : string | Object[] | Object;
  distinct? : string;
  limit? : string;
  skip? : string;
  sort? : string;
}

@Injectable()
export class APIService {

  readonly apiHost:string;

  constructor(@Inject(APP_CONFIG) config:IAppConfig, private http: Http) {
    this.apiHost = config.apiHost;
  }

}
