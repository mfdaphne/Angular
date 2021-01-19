import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FormsModule } from '@angular/forms';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouting } from './app-routing.module';
import { AuthGuardService } from './auth-guard-service.service';
import { AuthService } from './auth-service.service';
import { CanDeactivateService } from './servers/edit-server/can-deactivate-service.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServerResolver } from './servers/server/server-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting

  ],
  providers: [ServersService, AuthGuardService, AuthService, CanDeactivateService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
