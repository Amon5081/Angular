import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private LoginService: LoginService, private router: Router) { }


  logout() {
    this.LoginService.logout();
    this.router.navigate(['/auth']);
  }

}
