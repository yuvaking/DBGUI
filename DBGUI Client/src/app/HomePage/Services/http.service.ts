import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  backendURL = 'http://localhost:54932/Home/';
  constructor(private http: HttpClient) { }

  getAllTables() {
    return this.http.get(this.backendURL + 'getAllTablesNames');
  }
}
