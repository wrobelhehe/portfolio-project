import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
