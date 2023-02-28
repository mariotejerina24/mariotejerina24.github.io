//variables
const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');

const numero = document.querySelector('#numero');
const nombreCalle = document.querySelector('#nombreCalle');
const ciudad = document.querySelector('#ciudad');
const estado = document.querySelector('#estado');
const pais = document.querySelector('#pais');

const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const celular = document.querySelector('#celular');

//funciones
const generarPerfil = async () => {
	try {
		const url = 'https://randomuser.me/api/';
		const respuesta = await fetch(url);
		const {results} = await respuesta.json();
		const datos = results[0];

		console.log(datos);
		foto.src = datos.picture.large;
		nombre.textContent = datos.name.first
		apellido.textContent = datos.name.last
		numero.textContent = datos.location.street.number
		nombreCalle.textContent = datos.location.street.name
		ciudad.textContent = datos.location.city
		estado.textContent = datos.location.state
		pais.textContent = datos.location.country
		correo.textContent = datos.email
		telefono.textContent = datos.phone
		celular.textContent = datos.cell
	}catch (error) {
		console.log(error);
	}
}

boton.addEventListener('click', generarPerfil);
document.addEventListener('DOMContentLoaded', generarPerfil)