import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

export interface ServerResponse {
  success: boolean;
  msg: string;
  token: any;
  user: any;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user): Observable<ServerResponse>{
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>('http://localhost:3000/users/register', user,{headers: headers})
      .pipe(map(res => res));

  }

  authenticateUser(user){
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>('http://localhost:3000/users/authenticate', user,{headers: headers})
      .pipe(map(res => res));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
