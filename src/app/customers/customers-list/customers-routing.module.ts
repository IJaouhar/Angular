import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../customers.component';

const routes: Routes = [
    // Tiene que hacer match la direccion en la primera pero la segunda es cualquiera
    { path: 'customers', component: CustomersComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {

}