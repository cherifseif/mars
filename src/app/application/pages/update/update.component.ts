import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Reservation } from 'src/app/entities/reservation';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id : any;
  reservation: Reservation= new Reservation;


  constructor( private route:ActivatedRoute, private http:HttpClient , private Route: Router,  private crud: CrudService) {
    this.route.params.subscribe(res=>{
     this.id = res.id;
     console.log(res.id);
    })
   }

  ngOnInit() {

    this.crud.getById(this.id).subscribe(res=>{
      this.reservation = <Reservation>res;
    },
    error=>{

    })
      
    /*
    // Old Code
    this.http.get('http://localhost:3000/reservation/'+this.id).subscribe(res=>{
      this.reservation = <Reservation>res;
    },
    error=>{

    })
    */
  }

  updateReservation(){

    this.crud.updateById(this.id, this.reservation).subscribe(res=>{
      console.log(res)
      this.Route.navigate(['/'])
    })

    /*
    // Old COde
    this.http.put('http://localhost:3000/reservation/'+this.id, this.reservation).subscribe(res=>{
      console.log(res)
      this.Route.navigate(['/'])
    })
    */
   
  }

}
