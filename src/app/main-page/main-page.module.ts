import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainPageRoutingModule } from './main-page-routing.module';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NavigationComponent } from './main/navigation/navigation.component';
import { SkyBackgroundComponent } from './sky-background/sky-background.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MidNavComponent } from './mid-nav/mid-nav.component';
import { ContactFormComponent } from './main/contact-form/contact-form.component';
import { FooterComponent } from './main/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FadeInOnScrollDirective } from '../common/directives/fade-in.directive';
import { CvComponent } from './main/cv/cv.component';
import { ScrollProgressDirective } from '../common/directives/scroll-progress';
import { ScrollToDirective } from '../common/directives/scroll-to.directive';

@NgModule({
  declarations: [
    MainComponent,
    SkyBackgroundComponent,
    NavigationComponent,
    DashboardComponent,
    DialogComponent,
    MidNavComponent,
    ContactFormComponent,
    FooterComponent,
    ScrollProgressDirective,
    FadeInOnScrollDirective,
    CvComponent,
    ScrollToDirective



  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgScrollbarModule,
    NgxSpinnerModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule





  ],
})
export class MainPageModule { }
