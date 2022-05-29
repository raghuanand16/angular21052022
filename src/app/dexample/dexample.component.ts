import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dexample',
  templateUrl: './dexample.component.html',
  styleUrls: ['./dexample.component.css']
})
export class DexampleComponent implements OnInit {

  myData = 'I am from pluto'
  myBoolean : Boolean = false

  myTrue = () =>{
    this.myBoolean = false
  }

  myFalse = () =>{
    this.myBoolean = true
  }

  constructor() { }

  ngOnInit(): void {
  }
 
}
