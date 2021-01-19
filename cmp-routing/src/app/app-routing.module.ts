import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard-service.service";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateService } from "./servers/edit-server/can-deactivate-service.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const appRoutes: Routes = [{ path: '', component: HomeComponent },
{
    path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent }
    ]
},
{
    path: 'servers', component: ServersComponent, canActivateChild: [AuthGuardService], children: [
        { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
        { path: ':id/edit', canDeactivate: [CanDeactivateService], component: EditServerComponent }
    ]
},
// { path: 'not-found', component: PageNotFoundComponent },
{ path: 'not-found', data: { message: 'Page not found !' }, component: ErrorMessageComponent },
{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRouting {

}