import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { UserComponent } from './layouts/pages/user/user.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./layouts/pages/user/user.module').then(m => m.UserModule)
  },

  {
    path: 'auth',
    component: AuthComponent,
  },
  { path: '**', redirectTo: 'dashboard/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
