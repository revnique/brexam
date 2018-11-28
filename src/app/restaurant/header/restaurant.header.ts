import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'r-header',
  templateUrl: './restaurant.header.html',
  styleUrls: ['./restaurant.header.css']
})

export class RestaurantHeader  implements OnInit {
    @Output() evt = new EventEmitter();
    lunchMode:boolean = false;
    headerText:string = "";
    mapMode:boolean = false;

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
        this.addEvents();
    }

    backClick(){
        this.evt.emit({"back":"clicked"});
        this.mapMode = false;
    }
    
    addEvents(){
        document.addEventListener("isInMapMode", (e:any) => {
            var data = e.detail;
            this.mapMode = data.isInMapMode;
        });
    }

}
