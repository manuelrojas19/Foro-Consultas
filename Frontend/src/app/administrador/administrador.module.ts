import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { CrearComponent } from './crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    UserIndexComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdministradorModule { }
