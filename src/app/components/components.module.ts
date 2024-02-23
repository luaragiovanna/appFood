import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { RestaurantComponent } from './restaurant/restaurant.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent] //usar em outros lugaress
})
export class ComponentsModule { }
