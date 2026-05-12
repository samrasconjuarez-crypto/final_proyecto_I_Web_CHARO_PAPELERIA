from flask import Flask, render_template, request, redirect, url_for, session
from flask_bcrypt import Bcrypt

from server.db import (
    agregar_usuario,
    obtener_usuario_por_email,
    obtener_usuario_por_id
)

app = Flask(__name__)
app.secret_key = 'papelcharo_secreto'

bcrypt = Bcrypt(app)

# ==================================================
# HOME
# ==================================================

@app.route('/')
def home():

    return render_template('index.html')


# ==================================================
# CATALOGO
# ==================================================

@app.route('/catalogo')
def catalogo():

    return render_template('catalogo.html')


# ==================================================
# CONTACTO
# ==================================================

@app.route('/contacto')
def contacto():

    return render_template('contacto.html')


# ==================================================
# SOBRE NOSOTROS
# ==================================================

@app.route('/nosotros')
def nosotros():

    return render_template('sobre_nosotros.html')


# ==================================================
# REGISTRO
# ==================================================

@app.route('/Registrarse', methods=['GET', 'POST'])
def registro():

    if request.method == 'POST':

        nombre = request.form['nombre']
        email = request.form['email']
        password = request.form['password']
        confirmar = request.form['confirmar']

        # VALIDAR CONTRASEÑAS
        if password != confirmar:

            return "Las contraseñas no coinciden"

        # CIFRAR PASSWORD
        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

        # GUARDAR USUARIO
        agregar_usuario(
            nombre,
            email,
            password_hash
        )

        return redirect(url_for('login'))

    return render_template('Registrarse.html')


# ==================================================
# LOGIN
# ==================================================

@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == 'POST':

        email = request.form['email']
        password = request.form['password']

        usuario = obtener_usuario_por_email(email)

        if usuario:

            password_correcta = bcrypt.check_password_hash(
                usuario['password'],
                password
            )

            if password_correcta:

                session['usuario_id'] = usuario['id_clientes']
                session['usuario_nombre'] = usuario['nombre']

                return redirect(url_for('perfil'))

        return "Correo o contraseña incorrectos"

    return render_template('IniciarSesion.html')


# ==================================================
# PERFIL
# ==================================================

@app.route('/perfil')
def perfil():

    if 'usuario_id' not in session:

        return redirect(url_for('login'))

    usuario = obtener_usuario_por_id(
        session['usuario_id']
    )

    return render_template(
        'index_perfil.html',
        usuario=usuario
    )

@app.route('/carrito')
def carrito():

    return render_template('index_carrito.html')

# ==================================================
# LOGOUT
# ==================================================

@app.route('/logout')
def logout():

    session.clear()

    return redirect(url_for('login'))


# ==================================================
# EJECUTAR SERVIDOR
# ==================================================

if __name__ == '__main__':

    app.run(debug=True)