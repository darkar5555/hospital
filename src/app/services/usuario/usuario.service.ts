import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import * as swal from 'sweetalert';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class UsuarioService {
  usuario: string;
  token : string;
  constructor(
    public http: HttpClient, public router: Router
  ) {

    console.log('Servicio de usuario listo');
    this.cargarStorage();
  }

  estaLogueado(){
    return (this.token.length > 1) ? true: false
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuario = null;
    }
  }

  login( usuario: Usuario, recordar: boolean = false){

    if (recordar){
      localStorage.setItem('email',usuario.email);
    }else{
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
      .map((resp:any)=>{
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        return true;
      });

  }

  logout(){
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);

  }

  crearUsuario (usuario : Usuario){
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
      .map((resp:any)=>{
        console.log('usuario creado')
        return resp.usuario;
      });
  }

}
