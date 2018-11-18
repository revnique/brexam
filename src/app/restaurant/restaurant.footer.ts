import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'r-footer',
  templateUrl: './restaurant.footer.html',
  styleUrls: ['./restaurant.footer.css']
})
export class RestaurantFooter  implements OnInit {
    isSelected:boolean = false;

    constructor(){}

    ngOnInit() {
        var self = this;
    }

}
