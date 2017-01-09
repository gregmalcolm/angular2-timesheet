import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['././app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() {}

  message: string;

  ngOnInit() {
    this.message = '';
  }

  updateUsername(event) {
    console.log(event.target.value)
    if(event.target.value.length == 0) {
      this.message = '';
    } else {
      this.message = `, ${event.target.value}`
    }

  }

}
