import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './application/home/home.component';
import { PagenotfoundComponent } from './application/pagenotfound/pagenotfound.component';
import { LoginComponent } from './application/login/login.component';
import { SignupComponent } from './application/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeetudComponent } from './application/homeetud/homeetud.component';
import { HomeensComponent } from './application/homeens/homeens.component';
import { HomeadmComponent } from './application/homeadm/homeadm.component';
import { ListusersComponent } from './application/listusers/listusers.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    HomeetudComponent,
    HomeensComponent,
    HomeadmComponent,
    ListusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD91MNhxzbYhOioWkny1DRGdx6bN79vh_8",
        authDomain: "projet-f0004.firebaseapp.com",
        databaseURL: "https://projet-f0004.firebaseio.com",
        projectId: "projet-f0004",
        storageBucket: "projet-f0004.appspot.com",
        messagingSenderId: "13229410046",
        appId: "1:13229410046:web:04054d095f3a823fa807af",
        measurementId: "G-FSB6ZE5DG7"
      }
    ),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
