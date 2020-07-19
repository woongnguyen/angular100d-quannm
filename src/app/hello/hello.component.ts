import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: '<span> hello {{name}}</span>'
})
export class HelloComponent {

  @Input() name : String;

  ngOnInit(){
    console.log('component Init')
  }
  ngOnDestroy(){
    console.log('component destroy')
  }
}

// khai báo input để lấy data từ component cha chứa nó
