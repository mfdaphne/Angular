import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanDeactivateComponent {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateService implements CanDeactivate<CanDeactivateComponent> {
    canDeactivate(component: CanDeactivateComponent, currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        return component.canDeactivate();
    }

}