# CRUD Mongo Node - Optional Homework

Proyecto base en Node.js para practicar conexion a MongoDB con Mongoose y construir una API CRUD.

## Objetivo de la tarea

Configurar una base de datos MongoDB y conectarla con Node.js para gestionar una coleccion de usuarios.

Datos sugeridos de usuario:
- first_name
- last_name
- email

## Estado actual del repositorio

Completado:
- Inicializacion del proyecto Node.js
- Instalacion de dependencias (Express, Mongoose, dotenv, morgan, nodemon)
- Conexion a MongoDB en src/config/db.js
- Definicion de schema y modelo User en src/models/User.js

Pendiente para terminar la entrega:
- Crear controladores CRUD
- Crear rutas CRUD
- Levantar servidor Express y probar endpoints en Postman o Insomnia
- Adjuntar capturas/video para evidencia

## Requisitos

- Node.js 18+
- npm
- Cuenta de MongoDB Atlas

## Variables de entorno

Copia .env.example a .env y completa tu cadena real de conexion:

~~~env
PORT=3000
MONGO_URI=mongodb+srv://admin:pass@cluster0.xxxxx.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Cluster0
~~~

## Instalacion

~~~bash
npm install
~~~

## Scripts

~~~bash
npm run dev
npm start
~~~

## Estructura del proyecto

~~~text
src/
  config/
    db.js
  models/
    User.js
  controllers/
  routes/
~~~

## Entrega sugerida

1. Link del repositorio GitHub.
2. Breve descripcion de la base de datos y coleccion.
3. Evidencia en capturas o video:
   - MongoDB Atlas con la base creada.
   - Pruebas CRUD en Postman/Insomnia.

## Repositorio remoto

El repositorio local esta vinculado a:
https://github.com/Robbhedonic/crud-mongo-node.git
