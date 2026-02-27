import { Component, inject } from '@angular/core';
import { EventoService } from './services/evento';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ✅ corregido (era styleUrl)
})
export class App {

  private eventoService = inject(EventoService);

  eventos: any[] = [];

  nuevoEvento = {
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: ''
  };

  constructor() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventoService.getEventos().subscribe((data: any) => {
      this.eventos = data;
      console.log(this.eventos);
    });
  }

  crearEvento() {
    this.eventoService.createEvento(this.nuevoEvento).subscribe((eventoCreado: any) => {
      
      // Agregamos lo que devuelve el backend (incluye id)
      this.eventos.push(eventoCreado);

      // Limpiar formulario
      this.nuevoEvento = {
        nombre: '',
        descripcion: '',
        fecha_inicio: '',
        fecha_fin: ''
      };
    });
  }
}