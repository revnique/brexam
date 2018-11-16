import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service'
import {} from 'googlemaps';



@Component({
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent  implements OnInit {
  restaurants:Array<any>;
  selectedRestaurant:any = {};
  map:any;

  inMapMode:boolean = false;
  inWebMode:boolean = false;
  showMap:boolean = true;
  doSlide:boolean = false;

  constructor(private restSvc: RestaurantService){}


    ngOnInit() {
        var self = this;
        self.loadRestaurants();
    }

    loadRestaurants(){
        let self = this;
        self.restSvc.getRestaurants().subscribe(response => {
            self.restaurants = response.restaurants;
            console.log(response);
            if(self.restaurants==null){
                alert('error');
                return;
            }
            self.selectedRestaurant = self.restaurants[0];
            //self.mapRestaurant(self.selectedRestaurant);
        });
    }
    mapRestaurant(restaurant:any){
        //alert(restaurant.name);
        if(this.inWebMode){

        }else{
            this.inMapMode = true;
        }
        if(this.selectedRestaurant == restaurant){
            this.doSlide = !this.doSlide;
        }
        this.selectedRestaurant = restaurant;
        this.loadMap(restaurant);
    }
    
    loadMap(r:any) {
        let self = this;
        self.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: new google.maps.LatLng(r.location.lat, r.location.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        var infowindow = new google.maps.InfoWindow({});

        var marker:any, i:number;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(r.location.lat, r.location.lng),
            map: self.map,
            icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=x|990000|ffffff',            
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(r.name);
                infowindow.open(self.map, marker);
            }
        })(marker, i));
        
    }

    loadPoints(points:any) {
        var rtn = [];
        var dataPoints = [];
        for (var i = 0; i < points.length; i++) {
            let point = points[i];
            var dataPoint = {
                info: '<strong>' + point.Name + '</strong><br>\
                ' + point.Address1 + '<br>' + point.City + ', ' + point.State + ' ' + point.Zip + '<br>',
                lat: point.Lat,
                long: point.Long
            };
            dataPoints.push(dataPoint);
            var loc = [dataPoint.info, dataPoint.lat, dataPoint.long, i];
            rtn.push(loc);
        }

        return rtn;
    };

    webMode(){

    }


}
