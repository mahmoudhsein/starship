import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipserviceService {

  private url ='https://localhost:44326/api/StarShip';
   
  constructor(private httpClient: HttpClient) { }
  
  getStarShips(distance:any,page:any,itemsPerPage:any){
    
    return this.httpClient.get(this.url+'?distance='+distance+'&page='+page+'&size='+itemsPerPage);
  }
}
