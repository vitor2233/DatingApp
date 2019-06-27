import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /*Recebe true para aparecer ou desaparecer*/
  registerToggle() {
    this.registerMode = true;
  }

  /* Cancelar e voltar para home */
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
