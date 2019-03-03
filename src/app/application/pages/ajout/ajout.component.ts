import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './../../../entities/reservation';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  reservation:Reservation =new Reservation();
  /*
  title:string;
  description:string;
  destination:string;
  reservation_type:string;
  price:string;
  start_date:Date;
  */

  constructor( private http: HttpClient, private crud: CrudService ) { 
     
  }

  ngOnInit() {
  }
  
  addReservation(){
    /*
    let  data = {
      title:this.title ,
      description:this.description,
      destination:this.destination,
      reservation_type:this.reservation_type,
      price:this.price,
      start_date:this.start_date
    }
    */

    /*
    // Old Code
    this.http.post('http://localhost:3000/reservations', this.reservation).subscribe(res=>{
      console.log(res)
    })
    */

   this.crud.createNew(this.reservation).subscribe(res=>{
    console.log(res)
    })
  }

}
