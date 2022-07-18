import { Component,OnInit  } from '@angular/core';
import { StarshipserviceService } from './services/starshipservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starship';
  ships:any;
  
  constructor(private service:StarshipserviceService) {}
  
  ngOnInit() {
      this.service.getStarShips()
        .subscribe(response => {
          this.ships = response;
        });
  }
}
