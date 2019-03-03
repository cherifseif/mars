import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './application/layout/layout.component';
import { DashboardComponent } from './application/pages/dashboard/dashboard.component';
import { AjoutComponent } from './application/pages/ajout/ajout.component';
import { UpdateComponent } from './application/pages/update/update.component';
import { ContainerComponent } from './application/common/container/container.component';

const routes: Routes = [
  {path:'', component:LayoutComponent, children:[
        {     path:'', component:DashboardComponent     },
        {     path:'ajout', component:AjoutComponent     },
        {     path:'update/:id', component:UpdateComponent     },
        {     path:'poc', component:ContainerComponent     }
      ]
  },
  {path: 'login', loadChildren:'./connexion/connexion.module#ConnexionModule'} // # le nom du module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
