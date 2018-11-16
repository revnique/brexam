import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestaurantService } from './restaurant.service';
import { RestaurantComponent } from './restaurant.component';

const RestaurantRoutes: Routes = [
    {
        path: 'lunch',
        component: RestaurantComponent,
        children:[
            { path: '', component: RestaurantComponent }
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
        RestaurantComponent
    ],
    providers:[
        RestaurantService
    ]
})

export class RestaurantModule{}