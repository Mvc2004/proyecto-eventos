Gestión de Eventos
Autora

Merly Velásquez
Ingeniería de Sistemas – Universidad del Valle

Descripción General

Este proyecto consiste en el desarrollo de una aplicación Full Stack para la gestión de eventos.

La aplicación permite:

Crear eventos

Listar eventos almacenados en base de datos

Persistir información en PostgreSQL

Visualizar los datos mediante una interfaz moderna con Angular Material

El sistema está dividido en dos capas principales:

Backend (API REST)

Frontend (Aplicación Angular)

Arquitectura

La aplicación sigue una arquitectura cliente-servidor:

Frontend (Angular)
⬇ HTTP
Backend (Node.js + Express)
⬇
Base de datos (PostgreSQL)

El backend expone endpoints REST que son consumidos por el frontend mediante HttpClient.

Tecnologías Utilizadas
Backend

Node.js

Express

PostgreSQL

pg (driver de conexión)

Frontend

Angular (Standalone Components)

Angular Material

TypeScript
