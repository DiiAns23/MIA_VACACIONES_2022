import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:LoginService, private router:Router){}
  canActivate(){
    if(this.authService.GetCurrentUser()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
