import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  status: boolean=false;
  counter: number=0;
  username:string="You Name";

  name:string="You Name";
  //   name:string;  // undifined et ''
  useremail:string="";
  userphone:string="";
  userabout:string="";
  // tableau Hero
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
    ];



  constructor() { 
    console.log("Je suis le constructeur");
  }

  ngOnInit() {
    console.log("Je suis le OnInit");
  }

  ngAfterContentInit() {
    console.log('Je suis le After Content Init');
  } 

  ngAfterViewInit() {
      console.log('Je suis le After View Init');
  } 
  
  hello(){
    alert(this.username);
  }

  decrement(){
    this.counter--;
  }

  incredment(){
    this.counter++;
  }

  annuler(){
    this.counter++;
  }

  save(){
    let data = { 
      "Name":this.name,
      "Email":this.useremail,
      "Phone":this.userphone,
      "About":this.userabout,
    }
    alert(JSON.stringify(data) );
    console.log(data);
  }

}
