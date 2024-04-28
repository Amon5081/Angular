import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { HomeComponent } from '../pages/home/home.component';
import { UserDialogComponent } from '../pages/user/components/user-dialog/user-dialog.component';
import { UserComponent } from '../pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'user',
        component: UserComponent,
        loadChildren: () => import('../pages/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'user-dialog',
        component: UserDialogComponent,
        loadChildren: () => import('../pages/user/components/user-dialog/user-dialog.module').then(m => m.UserDialogModule)
      },
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
