import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './../../../entities/reservation';
import { CrudService } from 'src/app/services/crud.service';
//import swal from 'sweetalert';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reservations:any =[];


  constructor(private http: HttpClient, private crud: CrudService) { }

  getAllReservation(){

    this.crud.getAll().subscribe(res=>
      { this.reservations = res;},
      error=>{
        console.log(error)
      }
      )
   
    /*
    // Old Code
    this.http.get('http://localhost:3000/reservations').subscribe(res=>
    { this.reservations = res;})
    */
  }

  ngOnInit() {

    this.getAllReservation();

   // swal("Hello world!");
  }

  delete(res) {

    this.crud.deleteById(res).subscribe(res=>
      {alert('deleted')})

    /*
    // Old Code
    this.http.delete('http://localhost:3000/reservation/' + res).subscribe(res=>
    {alert('deleted')})
    */

    this.getAllReservation();

  }

}
