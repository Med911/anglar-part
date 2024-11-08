import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
public loginFormGroup! : FormGroup;
  constructor(
    private fb : FormBuilder ,
    private authService : AuthenticationService,
    private route : Router
  ) {
}
ngOnInit() {
    this.loginFormGroup = this.fb.group( {
      username : this.fb.control(""),
      password : this.fb.control("")
    });
}

  login() :void {
    let username= this.loginFormGroup.value.username ;
    let password = this.loginFormGroup.value.password;
    let auth :boolean = this.authService.login(username,password);
    if (auth){
      this.route.navigateByUrl("/admin")
    }
  }
}
