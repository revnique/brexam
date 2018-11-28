import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestaurantService } from '../restaurant/service/restaurant.service';
import { RestaurantComponent } from './restaurant.component';
import { InternetsComponent } from '../internets/internets.component';
import { RestaurantHeader } from '../restaurant/header/restaurant.header';
import { RestaurantFooter } from '../restaurant/footer/restaurant.footer';

const RestaurantRoutes: Routes = [
    {
        path: '',
        component: RestaurantComponent,
        children:[
            { path: '', component: RestaurantComponent }
        ]
    },
    {
        path: 'internets',
        component: InternetsComponent,
        children:[
            { path: '', component: InternetsComponent }
        ]
    }
]


@NgModule({
    imports:[
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(RestaurantRoutes)
    ],
    exports:[
        RouterModule
    ],
    declarations:[        
        RestaurantComponent,
        InternetsComponent,
        RestaurantHeader,
        RestaurantFooter
    ],
    providers:[
        RestaurantService
    ]
})

export class RestaurantModule{}