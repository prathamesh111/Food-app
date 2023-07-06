import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { userModel } from './user.model';
import { environment } from 'src/environment/environment';
export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoading = new BehaviorSubject<boolean>(false);
  error$ = new Subject<string>();
  user$ = new BehaviorSubject<userModel | null>(null);
  tokenExpirationTimer : any;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +environment.firebaseApiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleErorr),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseApiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleErorr),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logOut() {
    this.user$.next(null);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  private handleAuthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new userModel(email, localId, idToken, expirationDate);
    this.user$.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    let userData:{  
      email:string,
      id:string,
      _token: string,
      _tokenexpirationDate : string
    } = JSON.parse(localStorage.getItem('userData') || '{}');
  
    if (!userData) {
      return;
    }

    const loadedUser = new userModel(userData.email, userData.id,userData._token, new Date(userData._tokenexpirationDate) )
    if(loadedUser.token){
        this.user$.next(loadedUser);
        const expirationDurarion = new Date(userData._tokenexpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expirationDurarion);
    }
  }


  autoLogout(expirationDuration: number){
   this.tokenExpirationTimer= setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }

  private handleErorr(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'this is unknown error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorRes);
    }
    switch (errorRes.error.error.message) {
      case 'INVALID_EMAIL':
        errorMessage = 'the email invalid';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'the email already exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'password is invalid';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = ' email not found';
        break;
    }
    return throwError(errorMessage);
  }
}
