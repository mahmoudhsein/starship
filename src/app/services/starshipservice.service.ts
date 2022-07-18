import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipserviceService {

  private url ='https://localhost:44326/api/StartShip?distance=1000000';
   
  constructor(private httpClient: HttpClient) { }
  
  getStarShips(){
    return this.httpClient.get(this.url);
  }
}
