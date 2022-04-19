import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }
  quotelist: any[]=[];

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){
    let quotename = form.value.quote
    let authorname = form.value.author
    /*console.log("hello world")*/
    this.quotelist.push({
     quotename,authorname
    });
    
    /*console.log(form.value.quote)*/
    console.log(this.quotelist)
    

  }

}

