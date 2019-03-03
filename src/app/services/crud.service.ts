import { Injectable } from '@angular/core';
import { getNativeByIndex } from '@angular/core/src/render3/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  api: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { 

  }

  getAll() {
    return this.http.get(this.api+ "reservations");
  }

  getById(id){
    return this.http.get(this.api+ "reservation/"+id);
  }

  createNew(data){
    return this.http.post(this.api+ "reservations/", data);
  }

  updateById(id, data){
    return this.http.put(this.api+ "reservation/"+id, data);
  }

  deleteById(id){
    return this.http.delete(this.api+ "reservation/"+id);
  }
}


