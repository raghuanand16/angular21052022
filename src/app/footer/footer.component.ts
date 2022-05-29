import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myName = 'Hello I am From Mars'



  constructor() { }

  ngOnInit(): void {
  }

  myClick = () => {
    console.log('Hey I am Event Binding')
  }

  myClick123 = () => {
    console.log('Hey I am Attribute Binding')
  }

}
