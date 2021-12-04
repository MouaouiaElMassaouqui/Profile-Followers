import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

   ContactMethod =  [{id:1, name:"Phone"},
                    { id:2, name: "Text" },
                    { id:3, name: "Gmail" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  log(firstname){
    console.log(firstname)
  }
  Submit(form){
    console.log(form);
  }
}
