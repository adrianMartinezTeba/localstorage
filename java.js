// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
// Muestra el usuario que has guardado en el DOM
// Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
const elementbtn = document.querySelector('#btn')
console.log(elementbtn)
function onSubmit(e) {
    e.preventDefault()
    const inpNombre = document.querySelector('#nombre')
    const inpCorreo = document.querySelector('#correo')
    const inpMensaje = document.querySelector('#mensaje')
    const usuario = {
        nombre: inpNombre.value,
        correo: inpCorreo.value,
        mensaje: inpMensaje.value,
    }
    localStorage.setItem('datosUser', JSON.stringify(usuario))
    const user = JSON.parse(localStorage.getItem('datosUser'))
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)
    console.log(divElement)
    divElement.innerHTML = `<p>Nombre: ${user.nombre}<br><p>Correo: ${user.correo}</p><p>Mensaje: ${user.mensaje}</p>`


}
elementbtn.addEventListener('click', onSubmit)
