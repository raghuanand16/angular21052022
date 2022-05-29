import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-header', Element Selector
  //selector: '.app-header',  class selector
  //selector: '#app-header', id selector
  selector: '[app-header]', //attribute selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  styles: [`p{color:red;}`],
  //template: `<div><p>Hello I am From Template</p></div>`

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
