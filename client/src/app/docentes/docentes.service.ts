import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docentes } from './docentes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  API_URI = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  getDocentes() {
    return this.http.get(`${this.API_URI}/docentes`);
  }

  getDocente(id: string) {
    return this.http.get(`${this.API_URI}/docentes/${id}`);
  }

  createDocente(docente: Docentes) {
    return this.http.post(`${this.API_URI}/docentes`, docente);
  }

  updateDocente(docente: Docentes, id: string): Observable<Docentes> {
    return this.http.put(`${this.API_URI}/docentes/${id}`, docente);
  }


  deleteDocente(id: string) {
    return this.http.delete(`${this.API_URI}/docentes/${id}`);
  }

}
