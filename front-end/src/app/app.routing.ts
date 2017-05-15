import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransportDocComponent } from './components/transportDoc/transportDoc.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';

/** Routes for all our pages in the app **/
export const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'transportDoc', component: TransportDocComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
