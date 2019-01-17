import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';




@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: string;
  id: number;

  constructor(private http: HttpClient) {
  }

  login(userName: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(`${userName}:${password}`));

    return this.http.get<any>('/userData', {headers: headers})
      .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          user.authdata = window.btoa(userName + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          user = JSON.parse(localStorage.getItem('currentUser'));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  getRole() {
    if (localStorage.getItem('currentUser')) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      return user.rolename;

    }
  }

  getUserNumber() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.userID;
    }
  }

  isLogged() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true;
    }
  }
}

