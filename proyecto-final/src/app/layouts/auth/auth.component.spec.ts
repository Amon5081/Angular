import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../../core/service/login.service';
import { AuthComponent } from "./auth.component";

describe('AuthComponent', () => {
  let component: AuthComponent;
  let loginService: jasmine.SpyObj<LoginService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['loginUser']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthComponent,
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy },
        FormBuilder
      ]
    });

    component = TestBed.inject(AuthComponent);
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('Debería navegar al panel de control cuando el inicio de sesión sea exitoso.', () => {
    component.authForm.setValue({ email: 'test@test.com', password: 'password' });
    loginService.loginUser.and.returnValue(of(true));

    component.ingreso();

    expect(router.navigate).toHaveBeenCalledWith(['/dashboard/user']);
  });

  it('Debería establecer un mensaje de error cuando el formulario no sea válido.', () => {
    component.authForm.setValue({ email: '', password: '' });

    component.ingreso();

    expect(component.errorMessage).toBe('Credenciales incorrectas');
  });
});
