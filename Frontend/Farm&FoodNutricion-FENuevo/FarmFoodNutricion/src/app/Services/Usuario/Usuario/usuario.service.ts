import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, 
    private router: Router) { }

  apiUrlBase: string = environment.baseUrl + "/api/usuario";
  userMapping : string[] = ["administrador", "veterinario", "operario"];

  getToken() : any {
    return localStorage.getItem("token");
  }

  getRol() : any {
    return localStorage.getItem("userRol");
  }

  getUserName() : any {
    return localStorage.getItem("userName");
  }
  
  /* TOKEN SERVICES */
  setToken(token: string, userName: string, rol: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userRol", rol);
   
  }

  /* AUTHENTICATION SERVICES */
  authenticateUser(view: string) {
    let token = this.getToken();
    if(token != "" && token != null) {
      let rol = this.getRol();
      var viewRol = view.concat('_').concat(rol);
      if(this.userMapping.includes(viewRol)) {
        return true;
      }
      return false;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
