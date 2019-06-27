import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    /* Retornar a url da API para realizar o login */
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          /* Usuário retorna um token para realizar o login posteriormente, dura 1 dia ! */
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  register(model: any) {
    /* Retornar a url da API para fazer o registro com o modelo */
    return this.http.post(this.baseUrl + 'register', model);
  }
}
