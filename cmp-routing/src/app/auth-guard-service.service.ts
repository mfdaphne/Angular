import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth-service.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
        Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
        Observable<boolean> | Promise<boolean> {

        return this.authService.isAutheniticated().then(
            (authenticated: Boolean) => {
                console.log('is Authenticated : ' + authenticated);
                if (authenticated) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                }
            }
        );

    }

}