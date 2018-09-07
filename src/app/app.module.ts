import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


//importar rutas
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AboutComponent } from './components/about/about.component';


//servicio
//import { YourmusicService } from './services/yourmusic.service';  YA NO LO UTILIZO PORQUE EN EL SERVICIO ESTA EL DECORADOR QUE DETECTA QUE SE CREA UN SERVICIO

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    LoadingComponent,
    TarjetasComponent,
    DomseguroPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES ,{useHash:true} )
  ],
  providers: [   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
