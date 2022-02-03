import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashbord' , pathMatch: 'full' },
  { path: 'dashbord' , component: DashboardComponent},
  { path: 'members', component: MembersComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
