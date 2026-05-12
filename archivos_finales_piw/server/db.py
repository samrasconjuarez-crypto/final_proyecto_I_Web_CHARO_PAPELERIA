import mysql.connector
from mysql.connector import errorcode
import os

 
# configutacion de la conexión
db_config = {
    'user': 'root',
    'password': 'ROOT1234',
    'host': 'localhost',
    'database': 'PapeleriaCharo'
}
 

def agregar_usuario(nombre, email, password_hash):

    conexion = mysql.connector.connect(**db_config)

    cursor = conexion.cursor()

    sql = """
    INSERT INTO clientes (nombre, email, password)
    VALUES (%s, %s, %s)
    """

    valores = (nombre, email, password_hash)

    cursor.execute(sql, valores)
    conexion.commit()
    usuario_id = cursor.lastrowid
    cursor.close()
    conexion.close()

    return usuario_id


def obtener_usuario_por_email(email):

    conexion = mysql.connector.connect(**db_config)

    cursor = conexion.cursor(dictionary=True)

    sql = "SELECT * FROM clientes WHERE email = %s"
    cursor.execute(sql, (email,))
    usuario = cursor.fetchone()
    cursor.close()
    conexion.close()

    return usuario


def obtener_usuario_por_id(usuario_id):

    conexion = mysql.connector.connect(**db_config)

    cursor = conexion.cursor(dictionary=True)

    sql = """
    SELECT id_clientes, nombre, email
    FROM clientes
    WHERE id_clientes = %s
    """

    cursor.execute(sql, (usuario_id,))
    usuario = cursor.fetchone()
    cursor.close()
    conexion.close()
    
    return usuario