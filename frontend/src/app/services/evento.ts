import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  getEventos() {
    return this.http.get(this.url);
  }

  createEvento(evento: any) {
  return this.http.post(this.url, evento);
}
}