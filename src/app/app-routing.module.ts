import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Tiene que hacer match la direccion en la primera pero la segunda es cualquiera
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}