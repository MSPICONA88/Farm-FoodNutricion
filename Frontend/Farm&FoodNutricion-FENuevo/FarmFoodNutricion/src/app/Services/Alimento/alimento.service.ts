import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alimento } from 'src/app/Interfaces/alimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  constructor(private http: HttpClient, 
    private router: Router) { }
    
    apiUrlBase: string = environment.baseUrl + "/api/alimento/traerTodos";

    getAllAlimentos(): Observable<Alimento[]> {
      return this.http.get<Alimento[]>(this.apiUrlBase);
    }
}
