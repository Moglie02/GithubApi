import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  constructor(private http: HttpClient){

function testHttp() {
  throw new Error('Function not implemented.');
}}}
