CREATE DATABASE PapeleriaCharo;

USE PapeleriaCharo;

CREATE TABLE clientes (
    id_clientes INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE proveedor (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT NOT NULL,
    id_proveedor INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    imagen VARCHAR(255),

    FOREIGN KEY (id_categoria)
        REFERENCES categoria(id_categoria),
    FOREIGN KEY (id_proveedor)
        REFERENCES proveedor(id_proveedor)
);

-- INSERT -------------

INSERT INTO categoria (nombre)
VALUES
('Cuadernos'),
('Bolígrafos'),
('Colores'),
('Reglas'),
('Tijeras'),
('Borradores');

INSERT INTO proveedor (nombre, telefono, email)
VALUES
('Lumen Mayoreo', '5552632000', 'ventas@lumen.com.mx'),
('Office Depot Mexico', '5552580900', 'atencionaclientes@officedepot.com.mx'),
('Distribuidora Lozano Hermanos', '8183742200', 'contacto@lozano.com.mx'),
('Papelera Proveedora La Republica', '5557044300', 'ventas@laproveedora.com'),
('Papelera San Rafael', '5557031500', 'contacto@sanrafael.com.mx');

INSERT INTO producto
(id_categoria, id_proveedor, nombre, marca, descripcion, precio, stock, imagen)
VALUES
(1, 1,
'Cuaderno Profesional Rayado', 'Scribe',
'Cuaderno profesional rayado de alta calidad',
30.00, 50,
'https://superpapelera.com.mx/wp-content/uploads/2023/05/143017970.webp'),

(1, 5,
'Cuaderno Profesional Cosido', 'Norma',
'Cuaderno cosido resistente para uso escolar',
60.00, 40,
'https://orpamex.com.mx/1230-large_default/cuaderno-profesional-cosido-color-360o-100-hojas-cuadro-chico.jpg'),

(2, 1,
'Bolígrafo de Gel G2 0.7mm', 'Pilot',
'Bolígrafo de tinta gel suave',
35.00, 100,
'https://officemax.vtexassets.com/arquivos/ids/1350146/74990_1.jpg?v=638158835999230000');
 






 