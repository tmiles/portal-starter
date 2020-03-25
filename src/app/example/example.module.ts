import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ExampleFirstComponent } from './example-first/example-first.component';

const AppRoutes: Routes = [
  {
    path: "",
    component: ExampleFirstComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
  ],
  declarations: [ExampleFirstComponent]
})
export class ExampleModule { }