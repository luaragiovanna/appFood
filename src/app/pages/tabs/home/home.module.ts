import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ComponentsModule } from 'src/app/components/components.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, BannerComponent]
})
export class HomePageModule {}
