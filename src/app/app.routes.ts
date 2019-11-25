import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NofoundComponent} from './shared/nofound/nofound.component';
import {RegisterComponent} from './login/register.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NofoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
