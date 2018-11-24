import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 // title = 'GestionDemandas';
  profile: any={};
  constructor(private auth:AuthService){
    this.auth.handleAuthentication();
    

  }

  ngOnInit(){
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  
  }
  login(){
    this.auth.login();
  }
  salir(){
    this.auth.logout();
  }
}
