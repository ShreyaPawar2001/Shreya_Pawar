import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppSideNavComponent } from './app-side-nav/app-side-nav.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ArabicComponent } from './arabic/arabic.component';

const routes: Routes = [
  { path:'',component:HeaderComponent},
  { path:'header',component:HeaderComponent},
  { path:'sideNav',component:AppSideNavComponent},
  { path:'datatable',component:DataTableComponent},
  { path:'arabic',component:ArabicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
