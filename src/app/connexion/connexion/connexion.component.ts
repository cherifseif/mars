import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  userNameValue="Valeur de compponent connexion";
  displayDataFromFils: any

  constructor() { }

  ngOnInit() {
  }

  displayresponse($event){
    alert('alert from connexion: ' + $event);
    this.displayDataFromFils = $event;
  }

}
