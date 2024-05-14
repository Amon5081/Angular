import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../core/service/login.service';





export const autguardGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.AutenticatedGet() == false) {
    return router.createUrlTree(['/auth']);
  } else {
    return true;
  }



}
