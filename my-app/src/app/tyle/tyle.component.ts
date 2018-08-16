import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-tyle',
  templateUrl: './tyle.component.html',
  styleUrls: ['./tyle.component.css']
})
export class TyleComponent implements OnInit {
 public tu: any[];
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getyu();
  }

  getyu() {
    var than = this;
    this.http.get('../../assets/json/tsconfig.json').subscribe(function (data) {
      than.tu = JSON.parse(data['_body']);
      console.log(than.tu);
    }, function () {

    });
  }
}
