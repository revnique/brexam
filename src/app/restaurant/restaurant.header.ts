import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternetsComponent } from './internets.component';
import { RestaurantComponent } from './restaurant.component';


@Component({
  selector: 'r-header',
  templateUrl: './restaurant.header.html',
  styleUrls: ['./restaurant.header.css']
})

export class RestaurantHeader  implements OnInit {
    lunchMode:boolean = false;
    headerText:string = "";

    constructor(private route: ActivatedRoute){}

    ngOnInit() {
        var self = this;
        this.route.url.subscribe((url) => {
            //this is just quick and dirty would actually put this data on the route object itself
            if(url.length>0){
                this.headerText = "";
                this.lunchMode = false;
            }else{
                this.headerText = "Lunch Tyme";
                this.lunchMode = true;
            }
        });
    }

    myFunction(){
        if(!this.lunchMode){
            let internets = new InternetsComponent();
            internets.functionOnStore();
        }else{
            let restaurant = new RestaurantComponent(null);
            restaurant.functionOnStore();
        }
    }

}
