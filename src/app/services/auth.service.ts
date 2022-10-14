import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WarehouseService } from './warehouse.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  private urlLogin: string = environment.urlLogin;
  constructor(private httpClient: HttpClient, private router: Router, private wh: WarehouseService) {
    this.iniciarSesion();
  }


  obtenerToken(email: string, password: string) {
    return this.httpClient.post(this.urlLogin, {
      'email': email,
      'password': password
    })
  }

  cerrarSesion() {
    this.currentUser = null;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.wh.vaciarPlatos();
  }

  iniciarSesion() {
    let token: any = localStorage.getItem('token');
    let decoded: any;
    if (token) {
      decoded = jwtDecode(token);
      this.currentUser = decoded.email;
    }
  }

}
