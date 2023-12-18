import { Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { TvProgramComponent } from './tv-program/tv-program.component';
import { TvProgramsComponent } from './tv-programs/tv-programs.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'films',
        component: FilmsComponent,
      },
      {
        path: 'film/:id',
        component: FilmComponent,
      },
      {
        path: 'tvprograms',
        component: TvProgramsComponent,
      },
      {
        path: 'tvprogram/:id',
        component: TvProgramComponent,
      }

];
