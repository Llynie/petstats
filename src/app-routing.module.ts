import { AppComponent } from "./app/app.component"
import {NgModule} from '@angular.core';
import {routerModule, Routes} from @angular/router;
const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: Appcomponent }, 
{path: 'component2', Component2Component }
]