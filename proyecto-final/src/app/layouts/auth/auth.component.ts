import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { admin } from './model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  authForm: FormGroup;

  admin: admin = {
    email: '',
    password: ''
  }




  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  ingreso() {
    const adminData = localStorage.getItem('admin');
    if (adminData) {
      const admin = JSON.parse(adminData);
      if (this.authForm.get('email')?.value === admin.email && this.authForm.get('password')?.value === admin.password) {
        this.router.navigate(['dashboard/user']);
      } else {
        alert('Email o contraseña incorrectos');
      }
    } else {
      alert('Email o contraseña incorrectos');
    }
  }

  registrar() {
    if (this.authForm.valid) {
      this.admin = {
        email: this.authForm.get('email')?.value,
        password: this.authForm.get('password')?.value
      };
      localStorage.setItem('admin', JSON.stringify(this.admin));
      console.log(this.admin);
      this.authForm.reset();
    }
  }

  ngOnInit() {
    const adminData = localStorage.getItem('admin');
    if (adminData) {
      this.admin = JSON.parse(adminData);
    }
  }

}


