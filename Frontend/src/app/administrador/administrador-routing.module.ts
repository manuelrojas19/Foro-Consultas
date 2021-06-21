import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { UserIndexComponent } from './user-index/user-index.component';
const routes: Routes = [
  {
    path: '', component: UserIndexComponent,
  }, {
    path: 'registrar_usuario', component: CrearComponent,
  }, 
  {
    path: 'editar_usuario/:boleta', component: EditarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
