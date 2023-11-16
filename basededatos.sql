CREATE DATABASE primer_tabla; /*CREAMOS LA BASE DE DATOS*/

SHOW DATABASE;

USE primer_tabla;

SHOW TABLES;

CREATE TABLE Jugadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    contrasenia VARCHAR(50) NOT NULL,
    puntaje_juego INT NOT NULL
);
