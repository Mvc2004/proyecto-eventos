# proyecto-eventos

- Contexto del Proyecto

Durante el desarrollo de este proyecto construí una aplicación Full Stack para la gestión de eventos utilizando:

Backend: Node.js + Express

Base de datos: PostgreSQL en PgAdmin

Frontend: Angular (Standalone Components)

UI: Angular Material

El objetivo fue entender y aplicar el flujo completo desde la persistencia de datos hasta la visualización en interfaz gráfica.

- Lo que Aprendí

1️. Arquitectura Cliente-Servidor

Uno de los mayores aprendizajes fue comprender realmente cómo funciona la arquitectura cliente-servidor e implementarla de manera correcta.

Antes entendía el concepto teóricamente, pero en este proyecto pude ver el flujo completo:

Frontend (Angular)
⬇ Petición HTTP
Backend (Express)
⬇ Consulta SQL
Base de datos (PostgreSQL)

Entendí cómo la API actúa como intermediaria entre la interfaz y la base de datos, y cómo esto permite desacoplar responsabilidades.

2️. Construcción de una API REST

Implementé endpoints como:

GET /eventos

POST /eventos

Aprendí a:

Manejar rutas en Express

Utilizar async/await

Controlar errores

Estructurar respuestas JSON

Probar endpoints antes de conectarlos al frontend

También comprendí la importancia de probar primero el backend de forma aislada.



4️. Angular Standalone Components

Este proyecto fue desarrollado sin app.module.ts, utilizando la arquitectura moderna de Angular con:

bootstrapApplication

Componentes standalone

Imports declarados directamente en el decorador

Inicialmente esto me generó errores como:

NG8001: componente no reconocido, ya que en Angular moderno cada componente debe declarar explícitamente sus dependencias en imports.

Este fue un aprendizaje importante sobre modularidad y arquitectura moderna, en la cual tuve guia con videos de youtube para tener una idea visual y de copilot para en manejo de errores

5️. Uso de Angular Material

Implementé:

mat-card

mat-form-field

mat-input

mat-button

Aprendí a:

Importar correctamente los módulos

Manejar formularios con ngModel

Conectar eventos del formulario con métodos del componente

Resolver problemas de caché con Vite y Angular

También enfrenté errores relacionados con dependencias optimizadas y caché, lo que me enseñó a limpiar el entorno cuando es necesario (Remove-Item -Recurse -Force .angular).

6️. Conexión Frontend - Backend

Uno de los momentos más importantes fue cuando:

Inserté un evento desde el formulario

Se guardó en PostgreSQL

Se mostró automáticamente en la lista

El correcto funcionamiento afianzo mi aprendizaje  del flujo completo de datos y del estado en Angular.

Aprendí cómo:

Crear un servicio Angular con HttpClient

Consumir una API REST

Actualizar dinámicamente el estado del componente

Reflejar cambios sin recargar la página

- Problemas Enfrentados

Durante el desarrollo enfrenté:


Errores de importación en Angular Material

Problemas de cache con Vite

Ajustes en la estructura del HTML de Angular Material

Validación de rutas del backend

Cada error me obligó a investigar, leer mensajes de consola y entender realmente qué estaba ocurriendo, en lugar de solo copiar soluciones.

- Habilidades Fortalecidas

Depuración de errores

Lectura e interpretación de mensajes de consola

Arquitectura por capas

Integración de tecnologías distintas

Organización del código

Mentalidad de resolución de problemas