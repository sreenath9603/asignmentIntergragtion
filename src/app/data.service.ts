
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "/assets/questions.json";


  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<Config>(this.url);
  }
}