import { Component, OnInit, Version, VERSION } from '@angular/core';

@Component({
  selector: 'app-twowaybexam',
  templateUrl: './twowaybexam.component.html',
  styleUrls: ['./twowaybexam.component.css']
})
export class TwowaybexamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Angular' + VERSION.major
  user = {
    name: "Quan",
    age:30
  }
  handler(event){
    console.log('clicked', event)
  }
}
