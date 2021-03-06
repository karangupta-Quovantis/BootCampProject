import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    let isUserLoggedIn = localStorage.getItem('userId');
    return isUserLoggedIn && typeof isUserLoggedIn === 'string';
    // return true;
  }
}
