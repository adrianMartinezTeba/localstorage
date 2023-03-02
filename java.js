// // 1. Formulario de contacto - Local Storage
// // Crear un formulario de contacto con los siguientes campos:
// // Nombre
// // Correo
// // Mensaje
// // // Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
// // // // Muestra el usuario que has guardado en el DOM
// // // // Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
const formulario = document.getElementById('form')
const inpnombre = document.getElementById('nombre')
const inpcorreo = document.getElementById('correo')
const inpmensaje = document.getElementById('mensaje')
const btnenviar = document.getElementById('btn')
const btnlimpiar = document.getElementById('btnlimpiar')

function onSubmit(e){
    e.preventDefault()
    let user = {
        nombre: inpnombre.value,
        correo: inpcorreo.value,
        mensaje: inpmensaje.value,
    }
    localStorage.setItem("datos",JSON.stringify(user))
    // let valores = JSON.parse(localStorage.getItem(user))
    document.createElement("p")
    console.log(valores)
    document.body.appendChild(valores)
    let usuario = document.createElement('p');
        document.body.appendChild(usuario)
        usuario.innerHTML = `<p>${user.nombre}</p> <p>${user.correo}</p> <p>${user.mensaje}</p><hr>`
        
        

   
    // console.log(user)
    }
    btn.addEventListener("click",onSubmit)
    // he estado atascado con lo de mostrar el usuario por el dom horas y no he conseguido hacerlo y no lo entiendo muy bien  esto lo voy a dejar asi ahora en clase en 5 mins lo tendré -.- y me apunto que tengo que repasar el dom