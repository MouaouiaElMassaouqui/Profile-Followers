import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route : Router) { }

  ngOnInit(): void {
  }

  add(){
    this.route.navigate(['followers', 12 , 'idbrahimdev'], {
      queryParams : {page: 12, type: 'Admin'}
    });
  }

}
