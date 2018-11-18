import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './internets.component.html',
  styleUrls: ['./internets.component.css']
})
export class InternetsComponent  implements OnInit {
    isSelected:boolean = false;

    constructor(){}

    ngOnInit() {
        var self = this;
    }
    functionOnStore(){
        alert("adsf");
    }
}
