import { pedirTokenEnSpotify } from "../services/servicioSpotify.js"
import { buscarCanciones } from "../services/servicioConsultarCanciones.js"

let fila = document.getElementById("fila")

pedirTokenEnSpotify().then(function(token){
    buscarCanciones(token).then(function (respuesta){

        respuesta.tracks.forEach(function(cancion){
            let columna = document.createElement("div")
            columna.classList.add("col")

            let tarjeta = document.createElement("div")
            tarjeta.id = "tarjeta"
            tarjeta.classList.add("card", "h-100", "shadow")

            let titulo = document.createElement("h4")
            titulo.classList.add('card-title')
            let name = cancion.name
            titulo.innerHTML = name
            // console.log(cancion.name)

            let imagen = document.createElement("img")
            imagen.classList.add("card-img-top")
            imagen.src = cancion.album.images[1].url

            let pista = document.createElement("audio")
            pista.id = "pista"
            pista.classList.add("w-100")
            pista.setAttribute("controls", "controls")
            pista.src=cancion.preview_url

            tarjeta.appendChild(imagen)
            tarjeta.appendChild(titulo)
            tarjeta.appendChild(pista)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
        })

        // console.log(respuesta.tracks[1])
        // console.log(respuesta.tracks[1].name)
        // console.log(respuesta.tracks[1].preview_url)
        // console.log(respuesta.tracks[1].album.images[0].url)
    })
})


