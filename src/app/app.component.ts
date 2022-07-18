import { Component  } from '@angular/core';
import { StarshipserviceService } from './services/starshipservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starship';
  page: number = 1;
  items:any;
  totalItems : any; 
  itemsPerPage = 10;
  distance:any;
  constructor(private service:StarshipserviceService) {}
 
  getdata(page: any){
   
    this.page=page;
    this.search();
  }
  search(){
    this.service.getStarShips(this.distance,this.page,this.itemsPerPage)
        .subscribe((data: any)=> {
          this.items = data.basicStarShips;
          this.totalItems = data.totalRecords;
        });
  }
}
