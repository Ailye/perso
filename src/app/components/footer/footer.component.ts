import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  today: any;

  ngOnInit(): void {
    let fullDate = new Date();
    this.today = '' + ("0" + fullDate.getDate()).slice(-2) + '/' + ("0" + (fullDate.getMonth() + 1)).slice(-2) + '/' + fullDate.getFullYear();
  }

}
