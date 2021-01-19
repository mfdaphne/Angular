import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Data, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

export interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server |
        Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params['id']);

    }


}