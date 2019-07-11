import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  /* model irá guardar o nome e senha do usuário */
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Bem vindo ' + this.authService.decodedToken.unique_name);
    }, error => {
      this.alertify.error('Usuário não encontrado');
      console.log(error);
    }, () => {
      this.router.navigate(['/matches']);
    });
  }

  /* Verificar se o token está expirado */
  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Esperamos você de volta !');
    this.router.navigate(['/home']);
  }

}
