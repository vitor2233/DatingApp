import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  /*
  * model irá guardar o nome e senha do usuário
  */
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logado com sucesso');
    }, error => {
      console.log('Falha no login');
    });
  }

  /* !! Irá retornar true ou false para verificar se existe o token */
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('Deslogado');
  }

}
