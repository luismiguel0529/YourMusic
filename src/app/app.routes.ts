import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AboutComponent } from './components/about/about.component';


export const ROUTES: Routes = [
    { path:'home',component: HomeComponent },
    { path:'search',component: SearchComponent },
    { path:'artist/:id',component: ArtistComponent },
    { path:'about',component: AboutComponent },
    { path:'',pathMatch:'full',redirectTo:'home' },
    { path:'**',pathMatch:'full',redirectTo:'home' }
    
];