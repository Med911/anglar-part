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
export class AuthorizationGuardGuard{
  constructor(
    private authService : AuthenticationService ,
    private route :Router
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let authorize = false;
      let authorizedRoles : string[]= route.data["roles"] ;
      let roles : string[] = this.authService.roles;
    for (let i:number =0; i<roles.length ; i++) {
      if (authorizedRoles.includes(roles[i])) {
        authorize = true;
      }
    }
      return authorize;
  }
}

