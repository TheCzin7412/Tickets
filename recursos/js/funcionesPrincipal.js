// ########################################################
// ignorar este fragmento de codigo hasta nuevo aviso
// ########################################################
// console.log(contenedores)
// class Ajax {
//     constructor(url, metodo, data) {
//         this.respuesta;
//         this.url = url;
//         this.data = data;
//         this.metodo = metodo;

//         let metodo_final = this.metodo.toUpperCase();
//         var ajax = new XMLHttpRequest();
//         ajax.open(metodo_final, this.url);
//         // ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
//         ajax.send(this.data);   
//         ajax.onreadystatechange = function () {
//             if (ajax.readyState == 4) {
//                 if (ajax.status == 200) {
//                     console.log("200 Respuesta Exitosa");
//                     this.respuesta = ajax.responseText
//                 }
//                 if (ajax.status == 400) {
//                     console.log("400 El servidor no entendió la petición");
//                 }
//                 if (ajax.status == 404) {
//                     console.log("404 Página no encontrada");
//                 }
//                 if (ajax.status == 500) {
//                     console.log("500 Error interno de servidor");
//                 }
//             }
//             else {
//                 console.log("conectando...");
//             }
//         };
//         this.listo = function ()
//         {
//             console.log( this.respuesta)
//             return this.respuesta
//         }
//     }   
// }

// ########################################################
// ignorar este fragmento de codigo hasta nuevo aviso
// ########################################################

window.onload= function()
{
  let elemento = getCookie("vista-actual")
    mostrarVista(elemento)
}


function limpiar_formulario_empleado()
{
    let elementos = document.querySelectorAll(".input_text_empleado")
    for(let i =0; i<elementos.length;i++)
    {
        elementos[i].value=""
    }
}
function limpiar_formulario_adn()
{
    let elementos = document.querySelectorAll(".input_text_administrador")
    for(let i =0; i<elementos.length;i++)
    {
        elementos[i].value=""
    }
}

//Variables para desplazamiento del menus

let contenedores = document.querySelectorAll(".seccion")
let contenedor_dashboard= document.querySelectorAll(".seccion_tabla")
let contenedores_tickets = document.querySelectorAll(".seccion_tickets")
let contenedores_empresas = document.querySelectorAll(".seccion_empresa")
let contenedores_empleado = document.querySelectorAll(".seccion_empleado")
let contenedores_inicio_sesion = document.querySelectorAll(".seccion_empleado")
let contenedores_administradores = document.querySelectorAll(".seccion_administradores")


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
    let regexTicket = /ticket/
    let regexEmpresa = /empresas/
    let regexEmpleado = /empleado/
    let regexAdministrador = /administrador/
    //console.log(identificador)
    if(regexDashboard.test(identificador))
    {
        // console.log("coincide dashboard")
        let nombre_elemento = "contenedor_dashboard"
        mostrarVista(nombre_elemento)
        setCookie("vista-actual",nombre_elemento,1)
    }
    if(regexTicket.test(identificador))
    {
        // console.log("coincide ticket")
        let nombre_elemento = "contenedor_tickets"
        mostrarVista(nombre_elemento)
        setCookie("vista-actual",nombre_elemento,1)

    }
    if(regexEmpresa.test(identificador))
    {
        //console.log("coincide empresa")
        let nombre_elemento = "contenedor_empresas"
        mostrarVista(nombre_elemento)
        tomar_datos_empresas()
        setCookie("vista-actual",nombre_elemento,1)

    }
    if(regexEmpleado.test(identificador))
    {
        //console.log("coincide empleado")
        let nombre_elemento = "contenedor_empleado"
        mostrarVista(nombre_elemento)
        setCookie("vista-actual",nombre_elemento,1)
        tomar_datos_empleado()
    }
    if(regexAdministrador.test(identificador))
    {
        //console.log("coincide empleado")
        let nombre_elemento = "contenedor_administradores"
        mostrarVista(nombre_elemento)
        setCookie("vista-actual",nombre_elemento,1)
        

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
    let regexPeticion = /peticion/
    //console.log(identificador)
    if(regexPendiente.test(identificador))
    {
        //console.log("coincide pendiente")
        let nombre_elemento = "contenedor_tickets_pendientes"
        mostrarVistaDashboard(nombre_elemento)
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
    if(regexPeticion.test(identificador))
    {
        console.log("coincide peticiones")
        let nombre_elemento = "contenedor_peticion"
        mostrarVistaDashboard(nombre_elemento)
        tomar_datos_empresas_peticion_dashboard()

    }
}
///TERMINO DESPLAZAMIENTO OPCIONES DEL DASHBOARD


//INICIO DESPLAZAMIENTO ENTRE TICKETS

//Ocultar secciones del menu 
function ocultarSeccionesTickets()
{
    for(let i = 0; i<contenedores_tickets.length;i++)
    {
        contenedores_tickets[i].style.display="none";
    }
}
//Mostrar secciones del menu 
function mostrarVistaTickets(elemento)
{
    ocultarSeccionesTickets()
    let contenedor = document.getElementById(elemento)
    contenedor.style.display="flex"
}

// mostrarVista(contenedores[0])
//Desplazamiento secciones del menu en pagina principal 
function mostrarSeccionTickets(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexTicketsPendientes = /ticketsPendientes/
    let regexTicketsNoResueltos = /ticketsNoResuelto/
    let regexTicketsResueltos = /ticketsResuelto/
    let regexTicketsAgregar = /ticketsAgergar/ 
    //console.log(identificador)
    if(regexTicketsPendientes.test(identificador))
    {
        //console.log("coincide dashboard")
        let nombre_elemento = "contenedor_contenido_ticketsPendientes"
        mostrarVistaTickets(nombre_elemento)
    }
    if(regexTicketsNoResueltos.test(identificador))
    {
        //console.log("coincide ticket")
        let nombre_elemento = "contenedor_contenido_ticketsNoResueltos"
        mostrarVistaTickets(nombre_elemento)
    }
    if(regexTicketsResueltos.test(identificador))
    {
        //console.log("coincide empresa")
        let nombre_elemento = "contenedor_contenido_ticketsResueltos"
        mostrarVistaTickets(nombre_elemento)
    }
    if(regexTicketsAgregar.test(identificador))
    {
        //console.log("coincide empleado")
        let nombre_elemento = "contenedor_contenido_ticketsAgregarTicket"
        mostrarVistaTickets(nombre_elemento)
    }
}

/////TERMINO DESPLAZAMIENTO ENTRE TICKETS




//INICIO DESPLAZAMIENTO ENTRE EMPRESAS
//Ocultar secciones del menu 
function ocultarSeccionesEmpresas()
{
    for(let i = 0; i<contenedores_empresas.length;i++)
    {
        contenedores_empresas[i].style.display="none";
    }
}
//Mostrar secciones del menu 
function mostrarVistaEmpresas(elemento)
{
    ocultarSeccionesEmpresas()
    let contenedor = document.getElementById(elemento)
    contenedor.style.display="flex"
}

// mostrarVista(contenedores[0])
//Desplazamiento secciones del menu en pagina principal 
function mostrarSeccionEmpresas(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexEmpresaActiva = /activa/
    let regexEmpresaNoActiva = /noactiva/
    let regexPeticionEmpresa = /peticion/
    let regexEmpresaAgregar = /agregar/ 
    //console.log(identificador)
    if(regexEmpresaActiva.test(identificador))
    {
        // console.log("coincide dashboard")
        let nombre_elemento = "contenedor_empresas_activas"
        mostrarVistaEmpresas(nombre_elemento)
        tomar_datos_empresas()
    }
    if(regexEmpresaNoActiva.test(identificador))
    {
        // console.log("coincide ticket")
        let nombre_elemento = "contenedor_empresas_noactivas"
        mostrarVistaEmpresas(nombre_elemento)
        tomar_datos_empresas_noactivas()
    }
    if(regexPeticionEmpresa.test(identificador))
    {
        //console.log("coincide empresa")
        let nombre_elemento = "contenedor_peticion_empresas"
        mostrarVistaEmpresas(nombre_elemento)
        tomar_datos_empresas_peticion()
    }
    if(regexEmpresaAgregar.test(identificador))
    {
        //console.log("coincide empleado")
        let nombre_elemento = "contenedor_agregar_empresas"
        mostrarVistaEmpresas(nombre_elemento)
    }
}

/////TERMINO DESPLAZAMIENTO ENTRE EMPRESA





//INICIO DESPLAZAMIENTO ENTRE Empleado
//Ocultar secciones del menu 
function ocultarSeccionesEmpleado()
{
    for(let i = 0; i<contenedores_empleado.length;i++)
    {
        contenedores_empleado[i].style.display="none";
    }
}
//Mostrar secciones del menu 
function mostrarVistaEmpleado(elemento)
{
    ocultarSeccionesEmpleado()
    let contenedor = document.getElementById(elemento)
    contenedor.style.display="flex"
}

// mostrarVista(contenedores[0])
//Desplazamiento secciones del menu en pagina principal 
function mostrarSeccionEmpleado(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexEmpleadoActiva = /activo/
    let regexEmpleadoNoActiva = /noactivo/
    let regexEmpleadoAgregar = /agregar/ 
    //console.log(identificador)
    if(regexEmpleadoActiva.test(identificador))
    {
        // console.log("coincide dashboard")
        let nombre_elemento = "contenedor_empleado_activas"
        mostrarVistaEmpleado(nombre_elemento)
        tomar_datos_empleado()
    }
    if(regexEmpleadoNoActiva.test(identificador))
    {
        // console.log("coincide ticket")
        let nombre_elemento = "contenedor_empleado_noactivo"
        mostrarVistaEmpleado(nombre_elemento)
        tomar_datos_empleado_noactivos()
    }
    if(regexEmpleadoAgregar.test(identificador))
    {
        //console.log("coincide empresa")
        let nombre_elemento = "contenedor_form_agregar_empleado"
        mostrarVistaEmpleado(nombre_elemento)
    }
}

/////TERMINO DESPLAZAMIENTO ENTRE EMPRESA


//INICIO DESPLAZAMIENTO ENTRE Administradores
//Ocultar secciones del menu 
function ocultarSeccionesAdministradores()
{
    for(let i = 0; i<contenedores_administradores.length;i++)
    {
        contenedores_administradores[i].style.display="none";
    }
}
//Mostrar secciones del menu 
function mostrarVistaAdministradores(elemento)
{
    ocultarSeccionesAdministradores()
    let contenedor = document.getElementById(elemento)
    contenedor.style.display="flex"
}

// mostrarVista(contenedores[0])
//Desplazamiento secciones del menu en pagina principal 
function mostrarSeccionAdministradores(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexAdministradoresActiva = /activo/
    let regexAdministradoresNoActiva = /noactivos/
    let regexAdministradoresAgregar = /agregar/ 
    console.log(identificador)
    if(regexAdministradoresActiva.test(identificador))
    {
        // console.log("coincide dashboard")
        let nombre_elemento = "contenedor_administradores_activos"
        mostrarVistaAdministradores(nombre_elemento)
        tomar_datos_empleado()
    }
    if(regexAdministradoresNoActiva.test(identificador))
    {
        // console.log("coincide ticket")
        let nombre_elemento = "contenedor_administradores_noactivos"
        mostrarVistaAdministradores(nombre_elemento)
        tomar_datos_empleado_noactivos()
    }
    if(regexAdministradoresAgregar.test(identificador))
    {
        //console.log("coincide empresa")
        let nombre_elemento = "contenedor_administradores_agregar"
        mostrarVistaAdministradores(nombre_elemento)
    }
}

/////TERMINO DESPLAZAMIENTO ENTRE EMPRESA

///Formulario agrega Empleado en dashboard admin
var boton_agrega_empleado = document.getElementById("boton_agrega_empleado")

function agregar_empleado()
{
    
    var input_nombre_empleado = document.getElementById("input_nombre_empleado").value.trim()
    var input_apellidoP_empleado = document.getElementById("input_apellidoP_empleado").value.trim()
    var input_apellidoM_empleado = document.getElementById("input_apellidoM_empleado").value.trim()
    var input_domicilo_empleado = document.getElementById("input_domicilo_empleado").value.trim()
    var input_numero_exterior_empleado = document.getElementById("input_numero_exterior_empleado").value.trim()
    var input_colonia_empleado = document.getElementById("input_colonia_empleado").value.trim()
    var input_telefono_empleado = document.getElementById("input_telefono_empleado").value.trim()
    var input_puesto_empleado = document.getElementById("input_puesto_empleado").value.trim()
    var input_correo_empleado = document.getElementById("input_correo_empleado").value.trim()
    var input_contrasena_empleado = document.getElementById("input_contrasena_empleado").value.trim()
    var select_tipo_empleado = document.getElementById("select_tipo_empleado").value


    if( input_nombre_empleado.length==0 || 
        input_apellidoP_empleado.length ==0 || 
        input_apellidoM_empleado.length==0 || 
        input_domicilo_empleado.length==0 || 
        input_numero_exterior_empleado.length==0 || 
        input_colonia_empleado.length==0 || 
        input_telefono_empleado.length==0 ||  
        input_puesto_empleado.length==0 ||
        input_correo_empleado.length==0 ||
        input_contrasena_empleado.length==0 ||
        select_tipo_empleado == 0) 
    {
        alert("Los campos se encuentran vacio, favor de ingresar todos los datos...")
    }
    else
    {
       let datos = new FormData()

       datos.append("nombreEmpleado",input_nombre_empleado)
       datos.append("apellidopEmpleado",input_apellidoP_empleado)
       datos.append("apellidomEmpleado",input_apellidoM_empleado)
       datos.append("domicilioEmpleado",input_domicilo_empleado)
       datos.append("numeroextEmpleado",input_numero_exterior_empleado)
       datos.append("coloniaEmpleado",input_colonia_empleado)
       datos.append("telefonoEmpleado",input_telefono_empleado)
       datos.append("puestoEmpleado",input_puesto_empleado)
       datos.append("correoEmpleado",input_correo_empleado)
       datos.append("contrasenaEmpleado",input_contrasena_empleado)
       datos.append("tipo_usuario",select_tipo_empleado)


    //    console.log(select_tipo_empleado)
    //    console.log("-------")

       let ajax = new XMLHttpRequest()

       ajax.open("POST","../controlador/agregar_empleado.php")

       ajax.send(datos)

       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    limpiar_formulario_empleado()
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
    }
}

///Formulario agrega Empleado en dashboard admin
var boton_agrega_administrador = document.getElementById("boton_agrega_administrador")

function agregar_administrador()
{
    
    var input_nombre_administrador = document.getElementById("input_nombre_administrador").value.trim()
    var input_apellidoP_administrador = document.getElementById("input_apellidoP_administrador").value.trim()
    var input_apellidoM_administrador = document.getElementById("input_apellidoM_administrador").value.trim()
    var input_domicilo_administrador = document.getElementById("input_domicilo_administrador").value.trim()
    var input_numero_exterior_administrador = document.getElementById("input_numero_exterior_administrador").value.trim()
    var input_colonia_administrador = document.getElementById("input_colonia_administrador").value.trim()
    var input_telefono_administrador = document.getElementById("input_telefono_administrador").value.trim()
    var input_puesto_administrador = document.getElementById("input_puesto_administrador").value.trim()
    var input_correo_administrador = document.getElementById("input_correo_administrador").value.trim()
    var input_contrasena_administrador = document.getElementById("input_contrasena_administrador").value.trim()


    if( input_nombre_administrador.length==0 || 
        input_apellidoP_administrador.length ==0 || 
        input_apellidoM_administrador.length==0 || 
        input_domicilo_administrador.length==0 || 
        input_numero_exterior_administrador.length==0 || 
        input_colonia_administrador.length==0 || 
        input_telefono_administrador.length==0 ||  
        input_puesto_administrador.length==0 ||
        input_correo_administrador.length==0 ||
        input_contrasena_administrador.length==0) 
    {
        alert("Los campos se encuentran vacio, favor de ingresar todos los datos...")
    }
    else
    {
       let datos = new FormData()

       datos.append("nombreAdministrador",input_nombre_administrador)
       datos.append("apellidopAdministrador",input_apellidoP_administrador)
       datos.append("apellidomAdministrador",input_apellidoM_administrador)
       datos.append("domicilioAdministrador",input_domicilo_administrador)
       datos.append("numeroextAdministrador",input_numero_exterior_administrador)
       datos.append("coloniaAdministrador",input_colonia_administrador)
       datos.append("telefonoAdministrador",input_telefono_administrador)
       datos.append("puestoAdministrador",input_puesto_administrador)
       datos.append("correoAdministrador",input_correo_administrador)
       datos.append("contrasenaAdministrador",input_contrasena_administrador)


    //    console.log(select_tipo_empleado)
    //    console.log("-------")

       let ajax = new XMLHttpRequest()

       ajax.open("POST","../controlador/agregar_adn.php")

       ajax.send(datos)

       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    limpiar_formulario_adn()
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
    }
}


//funcion para desactivar empleado

function desactivar_empleado(event)
{
    let elemento = event.target
    let padre = elemento.parentNode.parentNode
    let id_objetivo = padre.id
    // alert(padre)
    // console.log(elemento)    
    let estado  = "0"
    let datos = new FormData()
    datos.append("id_empleado",id_objetivo)
    datos.append("estado",estado)

    let confirmacion = confirm("¿Esta seguro de desactivar este empleado?")
    // confirmacion = false
    if(confirmacion)
    {
        let ajax = new XMLHttpRequest()

    ajax.open("POST","../controlador/desactivar_empleado.php")

    ajax.send(datos)

    ajax.onreadystatechange =function () 
    {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    let elementId =id_objetivo
                    let node=document.getElementById(elementId);
                    node.parentNode.removeChild(node);        
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
    }
    
    console.log(padre)
}
/////// Activar Empleado
function activar_empleado(event)
{
    let elemento = event.target
    let padre = elemento.parentNode.parentNode
    let id_objetivo = padre.id
    let estado  = "1"

    let datos = new FormData()
    datos.append("id_empleado",id_objetivo)
    datos.append("estado",estado)

    let confirmacion = confirm("¿Esta seguro de activar nuevamente este empleado?")
    if(confirmacion)
    {
        let ajax = new XMLHttpRequest()

    ajax.open("POST","../controlador/activar_empleado.php")

    ajax.send(datos)

    ajax.onreadystatechange =function () 
    {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    let elementId =id_objetivo
                    let node=document.getElementById(elementId);
                    node.parentNode.removeChild(node);        
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
    }
    
    console.log(padre)
}
//funcion para desactivar empresas
function desactivar_empresas(event)
{
    let elemento = event.target
    let padre = elemento.parentNode.parentNode
    let id_objetivo = padre.id
    let estado  = "0"
    let datos = new FormData()
    datos.append("id_empleado",id_objetivo)
    datos.append("estado",estado)

    let confirmacion = confirm("¿Esta seguro de desactivar esta empresa?")
    if(confirmacion)
    {
        let ajax = new XMLHttpRequest()

    ajax.open("POST","../controlador/desactivar_empresa.php")

    ajax.send(datos)

    ajax.onreadystatechange =function () 
    {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    let elementId =id_objetivo
                    let node=document.getElementById(elementId);
                    node.parentNode.removeChild(node);        
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
    }
    
    console.log(padre)
}

/////// Activar empresas
function activar_empresas(event)
{
    let elemento = event.target
    let padre = elemento.parentNode.parentNode
    let id_objetivo = padre.id
    let estado  = "1"

    let datos = new FormData()
    datos.append("id_empleado",id_objetivo)
    datos.append("estado",estado)

    let confirmacion = confirm("¿Esta seguro de activar esta empresa?")
    if(confirmacion)
    {
        let ajax = new XMLHttpRequest()

    ajax.open("POST","../controlador/activar_empresa.php")

    ajax.send(datos)

    ajax.onreadystatechange =function () 
    {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    console.log(ajax.responseText)
                    let elementId =id_objetivo
                    let node=document.getElementById(elementId);
                    node.parentNode.removeChild(node);        
                }
                if (ajax.status == 400) 
                {
                    console.log("400 El servidor no entendió la petición");
                }
                if (ajax.status == 404)
                {
                    console.log("404 Página no encontrada");
                }
                if (ajax.status == 500) {
                    console.log("500 Error interno de servidor");
                }
            }            
        }
    }
    
    console.log(padre)
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



