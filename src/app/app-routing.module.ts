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
import { DepotensComponent } from './application/depotens/depotens.component';
import { ViewlogicielsetudComponent } from './application/viewlogicielsetud/viewlogicielsetud.component';
import { ViewstatsetudComponent } from './application/viewstatsetud/viewstatsetud.component';
import { DepotetudComponent } from './application/depotetud/depotetud.component';


import { ForumensComponent } from './application/forumens/forumens.component';
import { ForumensajoutpubComponent } from './application/forumensajoutpub/forumensajoutpub.component';
import { PublicationensComponent } from './application/publicationens/publicationens.component';
import { ForumensajoutcmntComponent } from './application/forumensajoutcmnt/forumensajoutcmnt.component';


import { ForumetudComponent } from './application/forumetud/forumetud.component';
import { ForumetudajoutpubComponent } from './application/forumetudajoutpub/forumetudajoutpub.component';
import { ForumetudajoutcmntComponent } from './application/forumetudajoutcmnt/forumetudajoutcmnt.component';
import { PublicationetudComponent } from './application/publicationetud/publicationetud.component';

import { ForumeadmComponent } from './application/forumeadm/forumeadm.component';
import { ForumeadmajoutpubComponent } from './application/forumeadmajoutpub/forumeadmajoutpub.component';
import { ForumadmajoutcmntComponent } from './application/forumadmajoutcmnt/forumadmajoutcmnt.component';
import { PublicationadmComponent } from './application/publicationadm/publicationadm.component';

import { QcmensComponent } from './application/qcmens/qcmens.component';
import { CreerqcmComponent } from './application/creerqcm/creerqcm.component';
import { AjouterqsComponent } from './application/ajouterqs/ajouterqs.component';
import { QcmComponent } from './application/qcm/qcm.component';

import { QcmetudComponent } from './application/qcmetud/qcmetud.component';
import { RepondreqcmComponent } from './application/repondreqcm/repondreqcm.component';

import { AjouterdocumentComponent } from './application/ajouterdocument/ajouterdocument.component';
import { DocumentensComponent } from './application/documentens/documentens.component';

import { DocumentetudComponent } from './application/documentetud/documentetud.component';
import { DocumentadmComponent } from './application/documentadm/documentadm.component';

import {AdminsecService  } from './services/security/adminsec.service';
import {EtudiantsecService  } from './services/security/etudiantsec.service';
import {EnseignantsecService  } from './services/security/enseignantsec.service';




const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'etudiant', component:HomeetudComponent, canActivate: [EtudiantsecService]},
  {path:'enseignant', component:HomeensComponent, canActivate: [EnseignantsecService]},

  {path:'listusers', component:ListusersComponent, canActivate: [AdminsecService]},

  {path:'adminstat', component:AdminstatComponent, canActivate: [AdminsecService]},
  {path:'viewstatsens', component:StatsComponent, canActivate: [EnseignantsecService]},

  {path:'ajoutstat', component:AjoutstatComponent, canActivate: [AdminsecService]},
  {path:'logiciels', component:ListlogicielsensComponent, canActivate: [EnseignantsecService]},
  {path:'viewlogicielsadm', component:ViewlogicielsComponent, canActivate: [AdminsecService]},
  {path:'ajoutlogiciel', component:AjoutlogicielComponent, canActivate: [EnseignantsecService]},
  {path:'depotens', component:DepotensComponent, canActivate: [EnseignantsecService]},

  {path:'viewlogicielsetud', component:ViewlogicielsetudComponent, canActivate: [EtudiantsecService]},
  {path:'viewstatsetud', component:ViewstatsetudComponent, canActivate: [EtudiantsecService]},
  {path:'depotetud', component:DepotetudComponent, canActivate: [EtudiantsecService]},

  {path:'forumens', component:ForumensComponent, canActivate: [EnseignantsecService]},
  {path:'AjouterPublicationens', component:ForumensajoutpubComponent, canActivate: [EnseignantsecService]},
  {path:'Publicationens/:id', component:PublicationensComponent, canActivate: [EnseignantsecService]},
  {path:'AjouterCommentaireens/:id', component:ForumensajoutcmntComponent, canActivate: [EnseignantsecService]},

  {path:'forumetud', component:ForumetudComponent, canActivate: [EtudiantsecService]},
  {path:'AjouterPublicationetud', component:ForumetudajoutpubComponent, canActivate: [EtudiantsecService]},
  {path:'Publicationetud/:id', component:PublicationetudComponent, canActivate: [EtudiantsecService]},
  {path:'AjouterCommentaireetud/:id', component:ForumetudajoutcmntComponent, canActivate: [EtudiantsecService]},

  {path:'forumadm', component:ForumeadmComponent, canActivate: [AdminsecService]},
  {path:'AjouterPublicationadm', component:ForumeadmajoutpubComponent, canActivate: [AdminsecService]},
  {path:'Publicationadm/:id', component:PublicationadmComponent, canActivate: [AdminsecService]},
  {path:'AjouterCommentaireadm/:id', component:ForumadmajoutcmntComponent, canActivate: [AdminsecService]},
  
  {path:'QCMens', component:QcmensComponent, canActivate: [EnseignantsecService]},
  {path:'creerQCM', component:CreerqcmComponent, canActivate: [EnseignantsecService]},
  {path:'Ajouterqs/:id', component:AjouterqsComponent, canActivate: [EnseignantsecService]},
  {path:'qcm/:id', component:QcmComponent, canActivate: [EnseignantsecService]},

  {path:'QCMetud', component:QcmetudComponent, canActivate: [EtudiantsecService]},
  {path:'repondreqcm/:id', component:RepondreqcmComponent, canActivate: [EtudiantsecService]},

  {path:'ajoutdocument', component:AjouterdocumentComponent, canActivate: [EnseignantsecService]},
  {path:'documentsens', component:DocumentensComponent, canActivate: [EnseignantsecService]},

  {path:'documentsetud', component:DocumentetudComponent, canActivate: [EtudiantsecService]},
  {path:'documentsadmin', component:DocumentadmComponent, canActivate: [AdminsecService]},



  {path:'admin', component:HomeadmComponent, canActivate: [AdminsecService]},
  {path:'', redirectTo:'home', pathMatch:'full'},
  
  {path:'**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
