import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './application/home/home.component';
import { PagenotfoundComponent } from './application/pagenotfound/pagenotfound.component';
import { LoginComponent } from './application/login/login.component';
import { SignupComponent } from './application/signup/signup.component';
import { HomeetudComponent } from './application/homeetud/homeetud.component';
import { HomeensComponent } from './application/homeens/homeens.component';
import { HomeadmComponent } from './application/homeadm/homeadm.component'
import { AdminstatComponent } from './application/adminstat/adminstat.component';
import { ListusersComponent } from './application/listusers/listusers.component';
import { AjoutstatComponent } from './application/ajoutstat/ajoutstat.component';
import { ListlogicielsensComponent } from './application/listlogicielsens/listlogicielsens.component';
import { AjoutlogicielComponent } from './application/ajoutlogiciel/ajoutlogiciel.component';
import { StatsComponent } from './application/stats/stats.component';
import { ViewlogicielsComponent } from './application/viewlogiciels/viewlogiciels.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'etudiant', component:HomeetudComponent},
  {path:'enseignant', component:HomeensComponent},
  {path:'listusers', component:ListusersComponent},
  {path:'adminstat', component:AdminstatComponent},
  {path:'ajoutstat', component:AjoutstatComponent},
  {path:'logiciels', component:ListlogicielsensComponent},
  {path:'viewlogiciels', component:ViewlogicielsComponent},

  {path:'ajoutlogiciel', component:AjoutlogicielComponent},
  {path:'viewstats', component:StatsComponent},


  {path:'admin', component:HomeadmComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
