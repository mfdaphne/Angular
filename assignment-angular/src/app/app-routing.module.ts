import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectivesComponent } from "./directives/directives.component";
import { HomeComponent } from "./home/home.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { ServicesComponent } from "./services/services.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'assignment1', component: SuccessAlertComponent },
    { path: 'assignment2', component: DataBindingComponent },
    { path: 'assignment3', component: DirectivesComponent },
    { path: 'assignment4', component: PropertyBindingComponent },
    { path: 'assignment5', component: ServicesComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRouting {

}