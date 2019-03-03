import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import {
  
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  myform: FormGroup;
  email:string;

  @Input() userName;
  sendDataToFather: string ="value from component ";

  @Output() sendData = new EventEmitter();


  constructor() { }

  ngOnInit() {
    alert('alert from inscription:' + this.userName);
    this.sendData.emit(this.sendDataToFather);

    this.myform = new FormGroup(
      { userName: new FormControl('',Validators.required),
        email: new FormControl('', [Validators.required , Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(8)])
      }
    )
  }

  testmail(){
    if(this.email=="seif@live.fr"){
      alert("success")
    }
  }

  signup(){
    console.log(this.myform.value)
  }

}
