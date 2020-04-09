//Para AppRoutingModule
import { NgModule } from '@angular/core';
//Para const app_routes
import { Routes, RouterModule } from '@angular/router';
//Rutas de cada componente
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent} from './pages/about/about.component';

const app_routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'marcas', component:MarcasComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
]
@NgModule({
    imports: [
        RouterModule.forRoot (app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{


}