import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
@Injectable()
export class AuthGuard{
  constructor(
    private authService : AuthenticationService ,
    private route :Router
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.authenticated==true){
        return true
      }else {

        this.route.navigate(["/login"]);
        return false ;

      }
  }
}

