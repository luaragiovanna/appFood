import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { EmptyOrderComponent } from 'src/app/components/empty-order/empty-order.component';
import { LoadingOrderComponent } from 'src/app/components/loading-order/loading-order.component';
import { OrderComponent } from 'src/app/components/order/order.component';
import { AccountPage } from './account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AccountPage, OrderComponent, LoadingOrderComponent, EmptyOrderComponent],

})
export class AccountPageModule {}
