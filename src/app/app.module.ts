import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';


const AppRoutes: Routes = [
  {
    path: "example",
    loadChildren: () => import('./example/example.module').then(m => m.ExampleModule)
  },
  {
    path: "",
    component: HelpComponent
  },
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    RouterModule.forRoot(AppRoutes), ],
  declarations: [ AppComponent, HelpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
