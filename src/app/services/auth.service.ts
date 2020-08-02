import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from '../models/user.model';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: true;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>()

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYmwZWC2E5IqigYCWkgIAX6Gn_eLVk1_U', {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .pipe(catchError(this.handleError), tap(authData => {
        this.handleAuth(authData.email, authData.localId, authData.idToken, +authData.expiresIn)
      }))
  }


  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYmwZWC2E5IqigYCWkgIAX6Gn_eLVk1_U', {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .pipe(catchError(this.handleError), tap(authData => {
        this.handleAuth(authData.email, authData.localId, authData.idToken, +authData.expiresIn)
      }))
  }



  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const tokenExpirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(userId, email, token, tokenExpirationDate);
    this.user.next(user)
  }



  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage)
    } else {
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exist already';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'The user does not exist or may have been deleted.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'The password is invalid or the user does not have a password.';
          break;
        default:
          break;
      }
      return throwError(errorMessage)
    }


  }
}
