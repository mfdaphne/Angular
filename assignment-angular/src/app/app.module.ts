import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { GameControlComponent } from './property-binding/game-control/game-control.component';
import { EvenComponent } from './property-binding/even/even.component';
import { OddComponent } from './property-binding/odd/odd.component';
import { ServicesComponent } from './services/services.component';
import { ActiveUsersComponent } from './services/active-users/active-users.component';
import { InactiveUsersComponent } from './services/inactive-users/inactive-users.component';
import { CounterService } from './services/counter-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DataBindingComponent,
    DirectivesComponent,
    PropertyBindingComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    ServicesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
