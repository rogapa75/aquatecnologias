import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const app_routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'marcas', component:MarcasComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''},
]



@NgModule({
    imports: [
        RouterModule.forRoot (app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{


}