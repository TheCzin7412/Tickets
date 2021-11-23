
function agregar_comentario()
{
    let input_elemento = document.getElementById("textarea_comentario")
    let input_id = document.getElementById("id_ticket")
    let input_nombre = document.getElementById("id_nombre")
    let input_tipo = document.getElementById("id_tipo")
    let valor = input_elemento.value
    let id_valor = input_id.value
    let usuario = input_nombre.value
    let tipo = input_tipo.value

    // crear funcion para tomar fecha actual
    let fecha = new Date()
    let dia = fecha.getDate()
    let mes = fecha.getMonth()
    let anio = fecha.getFullYear()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()

    let fecha_actual = dia+"/"+mes+"/"+anio+" "+hora+":"+minutos+":"+segundos


    let cadena_comentario = '<tr><td class="text_item" style ="border:none;">'+valor+" || "+usuario+" "+tipo+" "+fecha_actual+'</td></tr>'

    let datos= new FormData()
    datos.append("comentario",cadena_comentario);
    datos.append("id_ticket",id_valor);

    let ajax = new XMLHttpRequest()

       ajax.open("POST","../controlador/agregar_comentario.php")

       ajax.send(datos)

       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    dialogo(ajax.responseText)
                    // respuesta = ajax.responseText
                    // return respuesta
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) 
                {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
}




////////// Alertas

function dialogo(mensaje)
{
    let dialogo_mensaje = document.createElement("div")
    dialogo_mensaje.setAttribute("class","contenedor_dialogo")
    dialogo_mensaje.innerHTML=mensaje

    let boton  = document.createElement("div")
    boton.setAttribute("class","boton")
    boton.setAttribute("onclick","quitar_alerta(event);")
    boton.innerHTML="Aceptar"

    dialogo_mensaje.appendChild(boton)

    let contenedor = document.getElementById("contenedor")
    let fondo = document.createElement("div")
    fondo.setAttribute("class","contenedor_alerta")
    fondo.setAttribute("id","elemento_dialogo")

    fondo.appendChild(dialogo_mensaje)
    contenedor.appendChild(fondo)
}
function quitar_alerta(event)
{
    let elemento = event.target
    let padre = elemento.parentNode.parentNode
    let id_elemento = padre.id
    let borrado = document.getElementById(id_elemento)
    borrado.parentNode.removeChild(borrado)
    window.location.reload()
}