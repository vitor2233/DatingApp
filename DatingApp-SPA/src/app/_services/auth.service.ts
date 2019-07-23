import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    /* Retornar a url da API para realizar o login */
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          /* Usuário retorna um token para realizar o login posteriormente, dura 1 dia ! */
          localStorage.setItem('token', user.token);
          /* Decodificar o token */
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  register(model: any) {
    /* Retornar a url da API para fazer o registro com o modelo */
    return this.http.post(this.baseUrl + 'register', model);
  }

  /* Verificar se o token expirou com a livraria do GitHub instalada */
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
