Backend - Gestión de Eventos

- Descripción

API REST desarrollada con Node.js y Express para gestionar eventos.
Permite crear y consultar eventos almacenados en PostgreSQL.

- Tecnologías utilizadas

Node.js

Express

PostgreSQL

pg (driver)

- Instalación

Clonar repositorio

Instalar dependencias

npm install

Crear base de datos en PostgreSQL:

CREATE DATABASE bd_eventos;

Ejecutar servidor:

npm run dev

Servidor corre en:

http://localhost:3000

- Endpoints

GET /eventos
Devuelve lista de eventos

POST /eventos
Crea un nuevo evento

