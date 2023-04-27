import { pedirTokenEnSpotify } from "../services/servicioSpotify.js"
import { buscarCanciones } from "../services/servicioConsultarCanciones.js"

let fila = document.getElementById("fila")

pedirTokenEnSpotify().then(function(token){
    buscarCanciones(token).then(function (respuesta){

        respuesta.tracks.forEach(function(cancion){
            let columna = document.createElement("div")
            columna.classList.add("col")

            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card", "h-100", "shadow")


            let pista = document.createElement("audio")
            pista.classList.add("w-100")
            pista.setAttribute("controls", "controls")
            pista.src=cancion.preview_url

            tarjeta.appendChild(pista)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
        })

        console.log(respuesta.tracks[1])
        console.log(respuesta.tracks[1].name)
        console.log(respuesta.tracks[1].preview_url)
        console.log(respuesta.tracks[1].album.images[0].url)
    })
})


