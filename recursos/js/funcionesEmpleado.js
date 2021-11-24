var navegador = window.navigator.vendor || window.navigator.userAgent


window.onload= function()
{
    if(navegador.includes("Mozilla"))
    {
        let elemento = getCookie("vista-actual")
        mostrarVista(elemento)
    }
    if(navegador.includes("Google"))
    {
        let cookies = document.cookie
        // console.log(cookies)
        datos_totales = cookies.split(";")
        // console.log(datos_totales)
    }
}

// crear cookie

function crearCookie(metodo,url,datos)
{
    let ajax = new XMLHttpRequest()

       ajax.open(metodo,url)

       ajax.send(datos)

       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
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

function setCookie(nombreCookie, contenido, fechaFinal) 
{
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (fechaFinal * 24 * 60 * 60 * 1000));
    var caducidad = "expires}="+fecha.toUTCString();
    document.cookie = nombreCookie + "=" + contenido + ";"+"SameSite=None; Secure"+ + caducidad + ";path=/";
}

function getCookie(nombreCookie) 
{
    var nCookie = nombreCookie + "=";
    var arregloCookie = document.cookie.split(';');
    for(var i = 0; i < arregloCookie.length; i++) 
    {
        var c = arregloCookie[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
    if (c.indexOf(nCookie) == 0) 
    {
        return c.substring(nCookie.length, c.length);
    }
    }
    return "";
}


let contenedores = document.querySelectorAll(".seccion")
let contenedor_dashboard= document.querySelectorAll(".seccion_tabla")

//INICIO DESPLAZAMIENTO ENTRE MENUS
//Ocultar secciones del menu 
function ocultarSecciones()
{
    for(let i = 0; i<contenedores.length;i++)
    {
        contenedores[i].style.display="none";
    }
}
//Mostrar secciones del menu 
function mostrarVista(elemento)
{
    ocultarSecciones()
    let contenedor = document.getElementById(elemento)
    contenedor.style.display="flex"
}

// mostrarVista(contenedores[0])
//Desplazamiento secciones del menu en pagina principal 
function mostrarSeccion(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexDashboard = /dashboard/
    let regexContrasena = /contrasena/

    // console.log(navegador)

    //console.log(identificador)
    if(regexDashboard.test(identificador))
    {
        // console.log("coincide dashboard")
        let nombre_elemento = "contenedor_dashboard"
        mostrarVista(nombre_elemento)
        tomar_datos_tickets_pendientes_empleado()
        if(navegador.includes("Mozilla"))
        {
            // alert("Es mozilla")
            setCookie("vista-actual",nombre_elemento,1)
        }
        if(navegador.includes("Google"))
        {
            // alert("Es Google")
            let datos = new FormData()
            datos.append("valor",nombre_elemento);
            crearCookie("POST","../controlador/crear_cookie_vista.php",datos)
        }
        
    }
    if(regexContrasena.test(identificador))
    {
        //console.log("coincide contrasena")
        let nombre_elemento = "contenedor_cambio_contrasena"
        mostrarVista(nombre_elemento) 
        if(navegador.includes("Mozilla"))
        {
            // alert("Es mozilla")
            setCookie("vista-actual",nombre_elemento,1)
        }
        if(navegador.includes("Google"))
        {
            // alert("Es Google")
            let datos = new FormData()
            datos.append("valor",nombre_elemento);
            crearCookie("POST","../controlador/crear_cookie_vista.php",datos)
        }
    }
}

/////TERMINO DESPLAZAMIENTO ENTRE MENUS



///INICIO DESPLAZAMIENTO OPCIONES DEL DASHBOARD
//Ocultar secciones del dashboard  
function ocultarSeccionesDashboard()
{
    
    for(let i =0;i<contenedor_dashboard.length;i++)
    {
        contenedor_dashboard[i].style.display="none"
    }

}

//Mostrar secciones del dashboard 
function mostrarVistaDashboard(elemento)
{
    ocultarSeccionesDashboard()
    let contenedor_dashboard = document.getElementById(elemento)
    contenedor_dashboard.style.display="flex"
}

function mostrarSeccionDashboard(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexPendiente = /pendiente/
    let regexNoResuelto = /noResuelto/
    let regexResuelto = /resuelto/


    //console.log(identificador)
    if(regexPendiente.test(identificador))
    {
        //console.log("coincide pendiente")
        let nombre_elemento = "contenedor_tickets_pendientes"
        mostrarVistaDashboard(nombre_elemento)
        tomar_datos_tickets_pendientes_empleado()
    }
    if(regexNoResuelto.test(identificador))
    {
        //console.log("coincide no resuelto")
        let nombre_elemento = "contenedor_tickets_no_resueltos"
        mostrarVistaDashboard(nombre_elemento)
    }
    if(regexResuelto.test(identificador))
    {
        //console.log("coincide resuelto")
        let nombre_elemento = "contenedor_tickets_resuelto"
        mostrarVistaDashboard(nombre_elemento)
    }
    

}
///TERMINO DESPLAZAMIENTO OPCIONES DEL DASHBOARD

function editar_ticket(event)
{
    let elemento = event.target
    let padre = elemento.parentNode.parentNode
    let id_elemento = padre.id

    let enlace = "../Ticket/?info="+id_elemento

    window.open(enlace,"_blank")

    //console.log(padre)
}

