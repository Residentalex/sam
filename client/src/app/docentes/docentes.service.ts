import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from './docente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private apiURI = 'http://localhost:3000/api/docentes';

  constructor(
    private http: HttpClient
  ) { }



  getDocentes() {
    return this.http.get(`${this.apiURI}`);
  }

  getDocente(id: string) {
    return this.http.get(`${this.apiURI}/${id}`);
  }

  createDocente(docente: Docente) {
    return this.http.post(`${this.apiURI}`, docente);
  }

  updateDocente(id: string, docente: Docente): Observable<Docente> {
    return this.http.put(`${this.apiURI}/${id}`, docente);
  }

  deleteDocente(id: string) {
    return this.http.delete(`${this.apiURI}/${id}`);
  }


}

