import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainPageRoutingModule } from './main-page-routing.module';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NavigationComponent } from './navigation/navigation.component';
import { SkyBackgroundComponent } from './sky-background/sky-background.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [
    MainComponent,
    SkyBackgroundComponent,
    NavigationComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgScrollbarModule,
    NgxSpinnerModule,
    MaterialModule,



  ],
})
export class MainPageModule { }
