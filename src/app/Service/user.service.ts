import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';



const API_URL = 'http://localhost:8080/';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsersEnable(): Observable<User[]> {
    return this.http.get<User[]>(  `api/users/AllUser/Enable`);
  }

  getUsersNotEnable(): Observable<User[]> {
    return this.http.get<User[]>(`api/users/AllUser/NotEnable`);
  }

  addUser(a): Observable<User> {
    return this.http.post<User>(
       `api/users/addUser`, JSON.stringify(a), API_ARGS);
  }

  getUser(id: number): Observable<User> {
    return this.http.get <User>( `api/users/${id}`);
  }

  EnableUser(id: number): Observable<User> {
    return this.http.get <User>( `api/users/enable/${id}`);
  }

  updateUser(id: number, a): Observable<User> {
    return this.http.put<User>(`api/users/edit/${id}`, JSON.stringify(a.value), API_ARGS);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.get <User>( `api/users/delete/${id}`);
  }

}
