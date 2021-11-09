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


//Variables para desplazamiento del menus

let contenedores = document.querySelectorAll(".seccion")
let contenedor_dashboard= document.querySelectorAll(".seccion_tabla")
let contenedores_tickets = document.querySelectorAll(".seccion_tickets")
let contenedores_empresas = document.querySelectorAll(".seccion_empresa")
let contenedores_empleado = document.querySelectorAll(".seccion_empleado")
let contenedores_inicio_sesion = document.querySelectorAll(".seccion_empleado")
let contenedores_login = document.querySelectorAll(".seccion_login")

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
    }
    if(regexTicket.test(identificador))
    {
        // console.log("coincide ticket")
        let nombre_elemento = "contenedor_tickets"
        mostrarVista(nombre_elemento)
    }
    if(regexEmpresa.test(identificador))
    {
        //console.log("coincide empresa")
        let nombre_elemento = "contenedor_empresas"
        mostrarVista(nombre_elemento)
        tomar_datos_empresas()
    }
    if(regexEmpleado.test(identificador))
    {
        //console.log("coincide empleado")
        let nombre_elemento = "contenedor_empleado"
        mostrarVista(nombre_elemento)
        tomar_datos_empleado()
    }
    if(regexAdministrador.test(identificador))
    {
        //console.log("coincide empleado")
        let nombre_elemento = "contenedor_administradores"
        mostrarVista(nombre_elemento)
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
function ocultarSeccionesLogin()
{
    for(let i = 0; i<contenedores_login.length;i++)
    {
        contenedores_login[i].style.display="none";
    }
}
//Mostrar secciones del menu 
function mostrarVistaLogin(elemento)
{
    ocultarSeccionesLogin()
    let contenedor = document.getElementById(elemento)
    contenedor.style.display="flex"
}

// mostrarVista(contenedores[0])
//Desplazamiento secciones del menu en pagina principal 
function mostrarSeccionLogin(event)
{    
    let elemento = event.target
    let identificador = elemento.id
    let regexIncioSession = /login/
    let regexRegistrar = /inicioSesion/
    //console.log(identificador)
    if(regexIncioSession.test(identificador))
    {
        // console.log("coincide dashboard")
        let nombre_elemento = "contenedor_formulario_login"
        mostrarVistaLogin(nombre_elemento)
    }
    if(regexRegistrar.test(identificador))
    {
        // console.log("coincide ticket")
        let nombre_elemento = "contenedor_formulario_registrar"
        mostrarVistaLogin(nombre_elemento)
    }
    
}

/////TERMINO DESPLAZAMIENTO ENTRE EMPLEADO


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
    let padre = elemento.parentNode
    let id_objetivo = padre.id
    let estado  = "0"
    let datos = new FormData()
    datos.append("id_empleado",id_objetivo)
    datos.append("estado",estado)

    let confirmacion = confirm("¿Esta seguro de desactivar este empleado?")
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
    let padre = elemento.parentNode
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
    let padre = elemento.parentNode
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
function activar_empleado(event)
{
    let elemento = event.target
    let padre = elemento.parentNode
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



//funciones para tomar empleados activos
var datos_empleados
var boton_primero = document.getElementById("boton_paginador_primero")
var boton_anterior = document.getElementById("boton_paginador_anterior")
var boton_siguiente = document.getElementById("boton_paginador_siguiente")
var boton_ultimo = document.getElementById("boton_paginador_ultimo")
var cuerpo = document.getElementById("tabla_empleado_activo")
var indicador_pagina= document.getElementById("boton_paginador_cantidad")
var cantidad_vistas = document.getElementById("cantidad_empleados_activos").value
var pagina_actual_empleados_activos = 1

function tomar_datos_empleado()
{
    let contenedor = document.getElementById("tabla_empleado_activo")

    contenedor.innerHTML = ""
    let ajax = new XMLHttpRequest()
       ajax.open("POST","../controlador/tomar_empleados_activos.php")
       ajax.send()
       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    //console.log(ajax.responseText)
                    datos_empleados = JSON.parse(ajax.responseText)
                    // console.log(datos)
                    paginador_empleado(datos_empleados,pagina_actual_empleados_activos,cantidad_vistas,boton_anterior,boton_siguiente,boton_primero,boton_ultimo,cuerpo,indicador_pagina)

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

// agregar evento a botones de paginacion

boton_siguiente.addEventListener("click", function(){
    pagina_actual_empleados_activos++
    paginador_siguiente_empleado(datos_empleados,pagina_actual_empleados_activos,cantidad_vistas,boton_anterior,boton_siguiente,boton_primero,boton_ultimo,cuerpo,indicador_pagina)
})

boton_anterior.addEventListener("click", function(){
    pagina_actual_empleados_activos--
    paginador_anterior_empleado(datos_empleados,pagina_actual_empleados_activos,cantidad_vistas,boton_anterior,boton_siguiente,boton_primero,boton_ultimo,cuerpo,indicador_pagina)
})

boton_primero.addEventListener("click", function(){
    pagina_actual_empleados_activos = 1 
    paginador_primera_empleado(datos_empleados,pagina_actual_empleados_activos,cantidad_vistas,boton_anterior,boton_siguiente,boton_primero,boton_ultimo,cuerpo,indicador_pagina)
})

boton_ultimo.addEventListener("click", function(){

    var tamano = datos_empleados.length;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual_empleados_activos = numero_paginas

    paginador_ultima_empleado(datos_empleados,pagina_actual_empleados_activos,cantidad_vistas,boton_anterior,boton_siguiente,boton_primero,boton_ultimo,cuerpo,indicador_pagina)
})

function paginador_empleado(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (numero_paginas==0) 
    {
        numero_paginas=1;
    }
    if (pagina_actual==1)
    {

        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";

    }
    else
    {

        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
        
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;

    
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            if(arreglo_rutas[inicio]=="error 400")
            {
                cuerpo_paginador.innerHTML='<tr><td style="text-align: center;" colspan="13">NO HAY DATOS</td></tr>'
            }
            else
            {

                //crear columnas por cada json con arreglo_rutas[inicio]
                       
                        let id = arreglo_rutas[inicio].id
                        let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
                        let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
                        let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
                        let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
                        let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
                        let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
                        let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
                        let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
                        let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
                        let activo  = arreglo_rutas[inicio].activo
                        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

                            let fila = document.createElement("tr")

                        let cadena_id = "id_"+id
                        fila.setAttribute("id",id)

                        let columna_id = document.createElement("td")
                        columna_id.setAttribute("class","texto")
                        columna_id.innerHTML = id
                        fila.appendChild(columna_id)

                        let columna_nombre = document.createElement("td")
                        columna_nombre.setAttribute("class","texto")
                        columna_nombre.innerHTML = nombreEmpleado
                        fila.appendChild(columna_nombre)

                        let columna_apellidop = document.createElement("td")
                        columna_apellidop.setAttribute("class","texto")
                        columna_apellidop.innerHTML = apellidopEmpleado
                        fila.appendChild(columna_apellidop)

                        let columna_apellidom = document.createElement("td")
                        columna_apellidom.setAttribute("class","texto")
                        columna_apellidom.innerHTML = apellidomEmpleado
                        fila.appendChild(columna_apellidom)

                        let columna_domicilio = document.createElement("td")
                        columna_domicilio.setAttribute("class","texto")
                        columna_domicilio.innerHTML = domicilioEmpleado
                        fila.appendChild(columna_domicilio)

                        let columna_numeroext = document.createElement("td")
                        columna_numeroext.setAttribute("class","texto")
                        columna_numeroext.innerHTML = numeroextEmpleado
                        fila.appendChild(columna_numeroext)

                        let columna_colonia = document.createElement("td")
                        columna_colonia.setAttribute("class","texto")
                        columna_colonia.innerHTML = coloniaEmpleado
                        fila.appendChild(columna_colonia)

                        
                        let columna_telefono = document.createElement("td")
                        columna_telefono.setAttribute("class","texto")
                        columna_telefono.innerHTML = telefonoEmpleado
                        fila.appendChild(columna_telefono)
                        
                        let columna_puesto = document.createElement("td")
                        columna_puesto.setAttribute("class","texto")
                        columna_puesto.innerHTML = puestoEmpleado
                        fila.appendChild(columna_puesto)

                        let columna_correo = document.createElement("td")
                        columna_correo.setAttribute("class","texto")
                        columna_correo.innerHTML = correoEmpleado
                        fila.appendChild(columna_correo)

                        let columna_activo = document.createElement("td")
                        columna_activo.setAttribute("class","texto")
                        columna_activo.innerHTML = activo
                        fila.appendChild(columna_activo)

                        let columna_tipo_usuario = document.createElement("td")
                        columna_tipo_usuario.setAttribute("class","texto")
                        columna_tipo_usuario.innerHTML = tipo_usuario
                        fila.appendChild(columna_tipo_usuario)

                        let columna_editar = document.createElement("td")

                        let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/error.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","desactivar_empleado(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/editar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)

                        // columna_editar.setAttribute("class","boton_tabla")
                        // // columna_editar.setAttribute("style","cursor:pointer;")
                        // columna_editar.innerHTML = "activar"

                        fila.appendChild(columna_editar)
                        cuerpo_paginador.appendChild(fila)    
            }	
            // console.log(arreglo_rutas[inicio]);
            var paso = true;
            if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
            if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_siguiente_empleado(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    // pagina_actual++;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";

    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);


    if (pagina_actual==1)
    {
        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";
    }
    else{
        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }


    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            let id = arreglo_rutas[inicio].id
            let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
            let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
            let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
            let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
            let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
            let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
            let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
            let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
            let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
            let activo  = arreglo_rutas[inicio].activo
            let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

                let fila = document.createElement("tr")

            let cadena_id = "id_"+id
            fila.setAttribute("id",id)

            let columna_id = document.createElement("td")
            columna_id.setAttribute("class","texto")
            columna_id.innerHTML = id
            fila.appendChild(columna_id)

            let columna_nombre = document.createElement("td")
            columna_nombre.setAttribute("class","texto")
            columna_nombre.innerHTML = nombreEmpleado
            fila.appendChild(columna_nombre)

            let columna_apellidop = document.createElement("td")
            columna_apellidop.setAttribute("class","texto")
            columna_apellidop.innerHTML = apellidopEmpleado
            fila.appendChild(columna_apellidop)

            let columna_apellidom = document.createElement("td")
            columna_apellidom.setAttribute("class","texto")
            columna_apellidom.innerHTML = apellidomEmpleado
            fila.appendChild(columna_apellidom)

            let columna_domicilio = document.createElement("td")
            columna_domicilio.setAttribute("class","texto")
            columna_domicilio.innerHTML = domicilioEmpleado
            fila.appendChild(columna_domicilio)

            let columna_numeroext = document.createElement("td")
            columna_numeroext.setAttribute("class","texto")
            columna_numeroext.innerHTML = numeroextEmpleado
            fila.appendChild(columna_numeroext)

            let columna_colonia = document.createElement("td")
            columna_colonia.setAttribute("class","texto")
            columna_colonia.innerHTML = coloniaEmpleado
            fila.appendChild(columna_colonia)

            
            let columna_telefono = document.createElement("td")
            columna_telefono.setAttribute("class","texto")
            columna_telefono.innerHTML = telefonoEmpleado
            fila.appendChild(columna_telefono)
            
            let columna_puesto = document.createElement("td")
            columna_puesto.setAttribute("class","texto")
            columna_puesto.innerHTML = puestoEmpleado
            fila.appendChild(columna_puesto)

            let columna_correo = document.createElement("td")
            columna_correo.setAttribute("class","texto")
            columna_correo.innerHTML = correoEmpleado
            fila.appendChild(columna_correo)

            let columna_activo = document.createElement("td")
            columna_activo.setAttribute("class","texto")
            columna_activo.innerHTML = activo
            fila.appendChild(columna_activo)

            let columna_tipo_usuario = document.createElement("td")
            columna_tipo_usuario.setAttribute("class","texto")
            columna_tipo_usuario.innerHTML = tipo_usuario
            fila.appendChild(columna_tipo_usuario)

            let columna_editar = document.createElement("td")
            let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/error.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/editar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)
            fila.appendChild(columna_editar)
            cuerpo_paginador.appendChild(fila) 
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }

    // cuerpo_paginador.innerHTML=cuerpo;
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
    
}
function paginador_anterior_empleado(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador)
{
// pagina_actual--;
var cuerpo = "";
cuerpo_paginador.innerHTML = "";
var tamano = arreglo_rutas.length;
var inicio=pagina_actual-1;
inicio=inicio*cantidad_vistas;
var final=pagina_actual*cantidad_vistas;
var numero_paginas=tamano/cantidad_vistas;
numero_paginas=Math.ceil(numero_paginas);
if (pagina_actual==1)
{
btn_atras.style="visibility:hidden;";
btn_primera.style="visibility:hidden;";
}
else{
btn_atras.style="visibility:visible;";
btn_primera.style="visibility:visible;";
}

if (pagina_actual==numero_paginas) 
{
btn_adelante.style="visibility:hidden;";
btn_ultima.style="visibility:hidden;";
}
else{
btn_adelante.style="visibility:visible;";
btn_ultima.style="visibility:visible;";
}

var numero_clase=1;
for (inicio; inicio < final; inicio++) 
{
if (arreglo_rutas[inicio]!=undefined) 
{
    let id = arreglo_rutas[inicio].id
    let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
    let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
    let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
    let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
    let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
    let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
    let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
    let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
    let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_nombre = document.createElement("td")
    columna_nombre.setAttribute("class","texto")
    columna_nombre.innerHTML = nombreEmpleado
    fila.appendChild(columna_nombre)

    let columna_apellidop = document.createElement("td")
    columna_apellidop.setAttribute("class","texto")
    columna_apellidop.innerHTML = apellidopEmpleado
    fila.appendChild(columna_apellidop)

    let columna_apellidom = document.createElement("td")
    columna_apellidom.setAttribute("class","texto")
    columna_apellidom.innerHTML = apellidomEmpleado
    fila.appendChild(columna_apellidom)

    let columna_domicilio = document.createElement("td")
    columna_domicilio.setAttribute("class","texto")
    columna_domicilio.innerHTML = domicilioEmpleado
    fila.appendChild(columna_domicilio)

    let columna_numeroext = document.createElement("td")
    columna_numeroext.setAttribute("class","texto")
    columna_numeroext.innerHTML = numeroextEmpleado
    fila.appendChild(columna_numeroext)

    let columna_colonia = document.createElement("td")
    columna_colonia.setAttribute("class","texto")
    columna_colonia.innerHTML = coloniaEmpleado
    fila.appendChild(columna_colonia)

    
    let columna_telefono = document.createElement("td")
    columna_telefono.setAttribute("class","texto")
    columna_telefono.innerHTML = telefonoEmpleado
    fila.appendChild(columna_telefono)
    
    let columna_puesto = document.createElement("td")
    columna_puesto.setAttribute("class","texto")
    columna_puesto.innerHTML = puestoEmpleado
    fila.appendChild(columna_puesto)

    let columna_correo = document.createElement("td")
    columna_correo.setAttribute("class","texto")
    columna_correo.innerHTML = correoEmpleado
    fila.appendChild(columna_correo)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/error.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/editar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 

    var paso = true;
    if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
    if (numero_clase==2&&paso==true){numero_clase=1;}
}
}

// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_primera_empleado(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

cuerpo_paginador.innerHTML = "";
var cuerpo = "";
pagina_actual=1;
var tamano = arreglo_rutas.length;
var inicio=pagina_actual-1;
inicio=inicio*cantidad_vistas;
var final=pagina_actual*cantidad_vistas;
var numero_paginas=tamano/cantidad_vistas;
numero_paginas=Math.ceil(numero_paginas);

if (pagina_actual==1)
{
btn_atras.style="visibility:hidden;";
btn_primera.style="visibility:hidden;";
}
else{
btn_atras.style="visibility:visible;";
btn_primera.style="visibility:visible;";
}

if (pagina_actual==numero_paginas) 
{
btn_adelante.style="visibility:hidden;";
btn_ultima.style="visibility:hidden;";
}
else{
btn_adelante.style="visibility:visible;";
btn_ultima.style="visibility:visible;";
}

var numero_clase=1;
for (inicio; inicio < final; inicio++) 
{
if (arreglo_rutas[inicio]!=undefined) 
{
    let id = arreglo_rutas[inicio].id
    let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
    let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
    let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
    let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
    let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
    let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
    let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
    let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
    let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_nombre = document.createElement("td")
    columna_nombre.setAttribute("class","texto")
    columna_nombre.innerHTML = nombreEmpleado
    fila.appendChild(columna_nombre)

    let columna_apellidop = document.createElement("td")
    columna_apellidop.setAttribute("class","texto")
    columna_apellidop.innerHTML = apellidopEmpleado
    fila.appendChild(columna_apellidop)

    let columna_apellidom = document.createElement("td")
    columna_apellidom.setAttribute("class","texto")
    columna_apellidom.innerHTML = apellidomEmpleado
    fila.appendChild(columna_apellidom)

    let columna_domicilio = document.createElement("td")
    columna_domicilio.setAttribute("class","texto")
    columna_domicilio.innerHTML = domicilioEmpleado
    fila.appendChild(columna_domicilio)

    let columna_numeroext = document.createElement("td")
    columna_numeroext.setAttribute("class","texto")
    columna_numeroext.innerHTML = numeroextEmpleado
    fila.appendChild(columna_numeroext)

    let columna_colonia = document.createElement("td")
    columna_colonia.setAttribute("class","texto")
    columna_colonia.innerHTML = coloniaEmpleado
    fila.appendChild(columna_colonia)

    
    let columna_telefono = document.createElement("td")
    columna_telefono.setAttribute("class","texto")
    columna_telefono.innerHTML = telefonoEmpleado
    fila.appendChild(columna_telefono)
    
    let columna_puesto = document.createElement("td")
    columna_puesto.setAttribute("class","texto")
    columna_puesto.innerHTML = puestoEmpleado
    fila.appendChild(columna_puesto)

    let columna_correo = document.createElement("td")
    columna_correo.setAttribute("class","texto")
    columna_correo.innerHTML = correoEmpleado
    fila.appendChild(columna_correo)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/error.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/editar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 
    
    var paso = true;
    if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
    if (numero_clase==2&&paso==true){numero_clase=1;}
}
}
// cuerpo_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_ultima_empleado(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
var cuerpo = "";
cuerpo_paginador.innerHTML="";
var tamano = arreglo_rutas.length;
var numero_paginas=tamano/cantidad_vistas;
numero_paginas=Math.ceil(numero_paginas);
pagina_actual=numero_paginas;
var inicio=pagina_actual-1;
inicio=inicio*cantidad_vistas;
var final=pagina_actual*cantidad_vistas;


if (pagina_actual==1)
{
btn_atras.style="visibility:hidden;";
btn_primera.style="visibility:hidden;";
}
else{
btn_atras.style="visibility:visible;";
btn_primera.style="visibility:visible;";
}

if (pagina_actual==numero_paginas) 
{
btn_adelante.style="visibility:hidden;";
btn_ultima.style="visibility:hidden;";
}
else{
btn_adelante.style="visibility:visible;";
btn_ultima.style="visibility:visible;";
}

var numero_clase=1;
for (inicio; inicio < final; inicio++) 
{
if (arreglo_rutas[inicio]!=undefined) 
{
// arreglos
let id = arreglo_rutas[inicio].id
                        let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
                        let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
                        let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
                        let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
                        let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
                        let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
                        let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
                        let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
                        let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
                        let activo  = arreglo_rutas[inicio].activo
                        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

                            let fila = document.createElement("tr")

                        let cadena_id = "id_"+id
                        fila.setAttribute("id",id)

                        let columna_id = document.createElement("td")
                        columna_id.setAttribute("class","texto")
                        columna_id.innerHTML = id
                        fila.appendChild(columna_id)

                        let columna_nombre = document.createElement("td")
                        columna_nombre.setAttribute("class","texto")
                        columna_nombre.innerHTML = nombreEmpleado
                        fila.appendChild(columna_nombre)

                        let columna_apellidop = document.createElement("td")
                        columna_apellidop.setAttribute("class","texto")
                        columna_apellidop.innerHTML = apellidopEmpleado
                        fila.appendChild(columna_apellidop)

                        let columna_apellidom = document.createElement("td")
                        columna_apellidom.setAttribute("class","texto")
                        columna_apellidom.innerHTML = apellidomEmpleado
                        fila.appendChild(columna_apellidom)

                        let columna_domicilio = document.createElement("td")
                        columna_domicilio.setAttribute("class","texto")
                        columna_domicilio.innerHTML = domicilioEmpleado
                        fila.appendChild(columna_domicilio)

                        let columna_numeroext = document.createElement("td")
                        columna_numeroext.setAttribute("class","texto")
                        columna_numeroext.innerHTML = numeroextEmpleado
                        fila.appendChild(columna_numeroext)

                        let columna_colonia = document.createElement("td")
                        columna_colonia.setAttribute("class","texto")
                        columna_colonia.innerHTML = coloniaEmpleado
                        fila.appendChild(columna_colonia)

                        
                        let columna_telefono = document.createElement("td")
                        columna_telefono.setAttribute("class","texto")
                        columna_telefono.innerHTML = telefonoEmpleado
                        fila.appendChild(columna_telefono)
                        
                        let columna_puesto = document.createElement("td")
                        columna_puesto.setAttribute("class","texto")
                        columna_puesto.innerHTML = puestoEmpleado
                        fila.appendChild(columna_puesto)

                        let columna_correo = document.createElement("td")
                        columna_correo.setAttribute("class","texto")
                        columna_correo.innerHTML = correoEmpleado
                        fila.appendChild(columna_correo)

                        let columna_activo = document.createElement("td")
                        columna_activo.setAttribute("class","texto")
                        columna_activo.innerHTML = activo
                        fila.appendChild(columna_activo)

                        let columna_tipo_usuario = document.createElement("td")
                        columna_tipo_usuario.setAttribute("class","texto")
                        columna_tipo_usuario.innerHTML = tipo_usuario
                        fila.appendChild(columna_tipo_usuario)

                        let columna_editar = document.createElement("td")
                        let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/error.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/editar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)
                        fila.appendChild(columna_editar)
                        cuerpo_paginador.appendChild(fila) 

    var paso = true;
    if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
    if (numero_clase==2&&paso==true){numero_clase=1;}
}
}
// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}



//funciones para tomar empleados no activos
var datos_empleadosNO
var boton_primeroNO = document.getElementById("boton_paginador_primeroNo")
var boton_anteriorNO = document.getElementById("boton_paginador_anteriorNo")
var boton_siguienteNO = document.getElementById("boton_paginador_siguienteNo")
var boton_ultimoNO = document.getElementById("boton_paginador_ultimoNo")
var cuerpoNO = document.getElementById("tabla_empleado_noactivo")
var indicador_paginaNO  = document.getElementById("boton_paginador_cantidadNo")
var cantidad_vistasNO = document.getElementById("cantidad_empleados_noactivos").value
var pagina_actual_empleados_activosNO = 1

function tomar_datos_empleado_noactivos()
{
    let contenedor = document.getElementById("tabla_empleado_noactivo")

    contenedor.innerHTML = ""
    let ajax = new XMLHttpRequest()
       ajax.open("POST","../controlador/tomar_empleados_noactivos.php")
       ajax.send()
       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    //console.log(ajax.responseText)
                    datos_empleadosNO = JSON.parse(ajax.responseText)
                    // console.log(datos)
                    paginador_empleadoNo(datos_empleadosNO,pagina_actual_empleados_activosNO,cantidad_vistasNO,boton_anteriorNO,boton_siguienteNO,boton_primeroNO,boton_ultimoNO,cuerpoNO,indicador_paginaNO)

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

// agregar evento a botones de paginacion

boton_siguienteNO.addEventListener("click", function(){
    pagina_actual_empleados_activosNO++
    paginador_siguiente_empleadoNo(datos_empleadosNO,pagina_actual_empleados_activosNO,cantidad_vistasNO,boton_anteriorNO,boton_siguienteNO,boton_primeroNO,boton_ultimoNO,cuerpoNO,indicador_paginaNO)
})

boton_anteriorNO.addEventListener("click", function(){
    pagina_actual_empleados_activosNO--
    paginador_anterior_empleadoNo(datos_empleadosNO,pagina_actual_empleados_activosNO,cantidad_vistasNO,boton_anteriorNO,boton_siguienteNO,boton_primeroNO,boton_ultimoNO,cuerpoNO,indicador_paginaNO)
})

boton_primeroNO.addEventListener("click", function(){
    pagina_actual_empleados_activosNO = 1 
    paginador_primera_empleadoNo(datos_empleadosNO,pagina_actual_empleados_activosNO,cantidad_vistasNO,boton_anteriorNO,boton_siguienteNO,boton_primeroNO,boton_ultimoNO,cuerpoNO,indicador_paginaNO)
})

boton_ultimoNO.addEventListener("click", function(){

    var tamano = datos_empleadosNO.length;
    var numero_paginas=tamano/cantidad_vistasNO;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual_empleados_activosNO = numero_paginas
    paginador_ultima_empleadoNo(datos_empleadosNO,pagina_actual_empleados_activosNO,cantidad_vistasNO,boton_anteriorNO,boton_siguienteNO,boton_primeroNO,boton_ultimoNO,cuerpoNO,indicador_paginaNO)
})

function paginador_empleadoNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (numero_paginas==0) 
    {
        numero_paginas=1;
    }
    if (pagina_actual==1)
    {

        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";

    }
    else
    {

        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
        
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;

    
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            if(arreglo_rutas[inicio]=="error 400")
            {
                cuerpo_paginador.innerHTML='<tr><td style="text-align: center;" colspan="13">NO HAY DATOS</td></tr>'
            }
            else
            {

                //crear columnas por cada json con arreglo_rutas[inicio]
                       
                        let id = arreglo_rutas[inicio].id
                        let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
                        let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
                        let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
                        let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
                        let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
                        let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
                        let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
                        let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
                        let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
                        let activo  = arreglo_rutas[inicio].activo
                        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

                            let fila = document.createElement("tr")

                        let cadena_id = "id_"+id
                        fila.setAttribute("id",id)

                        let columna_id = document.createElement("td")
                        columna_id.setAttribute("class","texto")
                        columna_id.innerHTML = id
                        fila.appendChild(columna_id)

                        let columna_nombre = document.createElement("td")
                        columna_nombre.setAttribute("class","texto")
                        columna_nombre.innerHTML = nombreEmpleado
                        fila.appendChild(columna_nombre)

                        let columna_apellidop = document.createElement("td")
                        columna_apellidop.setAttribute("class","texto")
                        columna_apellidop.innerHTML = apellidopEmpleado
                        fila.appendChild(columna_apellidop)

                        let columna_apellidom = document.createElement("td")
                        columna_apellidom.setAttribute("class","texto")
                        columna_apellidom.innerHTML = apellidomEmpleado
                        fila.appendChild(columna_apellidom)

                        let columna_domicilio = document.createElement("td")
                        columna_domicilio.setAttribute("class","texto")
                        columna_domicilio.innerHTML = domicilioEmpleado
                        fila.appendChild(columna_domicilio)

                        let columna_numeroext = document.createElement("td")
                        columna_numeroext.setAttribute("class","texto")
                        columna_numeroext.innerHTML = numeroextEmpleado
                        fila.appendChild(columna_numeroext)

                        let columna_colonia = document.createElement("td")
                        columna_colonia.setAttribute("class","texto")
                        columna_colonia.innerHTML = coloniaEmpleado
                        fila.appendChild(columna_colonia)

                        
                        let columna_telefono = document.createElement("td")
                        columna_telefono.setAttribute("class","texto")
                        columna_telefono.innerHTML = telefonoEmpleado
                        fila.appendChild(columna_telefono)
                        
                        let columna_puesto = document.createElement("td")
                        columna_puesto.setAttribute("class","texto")
                        columna_puesto.innerHTML = puestoEmpleado
                        fila.appendChild(columna_puesto)

                        let columna_correo = document.createElement("td")
                        columna_correo.setAttribute("class","texto")
                        columna_correo.innerHTML = correoEmpleado
                        fila.appendChild(columna_correo)

                        let columna_activo = document.createElement("td")
                        columna_activo.setAttribute("class","texto")
                        columna_activo.innerHTML = activo
                        fila.appendChild(columna_activo)

                        let columna_tipo_usuario = document.createElement("td")
                        columna_tipo_usuario.setAttribute("class","texto")
                        columna_tipo_usuario.innerHTML = tipo_usuario
                        fila.appendChild(columna_tipo_usuario)

                        let columna_editar = document.createElement("td")

                        let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/alta.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","activar_empleado(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)

                        // columna_editar.setAttribute("class","boton_tabla")
                        // // columna_editar.setAttribute("style","cursor:pointer;")
                        // columna_editar.innerHTML = "activar"

                        fila.appendChild(columna_editar)
                        cuerpo_paginador.appendChild(fila)    
            }	
            // console.log(arreglo_rutas[inicio]);
            var paso = true;
            if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
            if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_siguiente_empleadoNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    // pagina_actual++;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";

    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);


    if (pagina_actual==1)
    {
        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";
    }
    else{
        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }


    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            let id = arreglo_rutas[inicio].id
            let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
            let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
            let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
            let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
            let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
            let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
            let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
            let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
            let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
            let activo  = arreglo_rutas[inicio].activo
            let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

                let fila = document.createElement("tr")

            let cadena_id = "id_"+id
            fila.setAttribute("id",id)

            let columna_id = document.createElement("td")
            columna_id.setAttribute("class","texto")
            columna_id.innerHTML = id
            fila.appendChild(columna_id)

            let columna_nombre = document.createElement("td")
            columna_nombre.setAttribute("class","texto")
            columna_nombre.innerHTML = nombreEmpleado
            fila.appendChild(columna_nombre)

            let columna_apellidop = document.createElement("td")
            columna_apellidop.setAttribute("class","texto")
            columna_apellidop.innerHTML = apellidopEmpleado
            fila.appendChild(columna_apellidop)

            let columna_apellidom = document.createElement("td")
            columna_apellidom.setAttribute("class","texto")
            columna_apellidom.innerHTML = apellidomEmpleado
            fila.appendChild(columna_apellidom)

            let columna_domicilio = document.createElement("td")
            columna_domicilio.setAttribute("class","texto")
            columna_domicilio.innerHTML = domicilioEmpleado
            fila.appendChild(columna_domicilio)

            let columna_numeroext = document.createElement("td")
            columna_numeroext.setAttribute("class","texto")
            columna_numeroext.innerHTML = numeroextEmpleado
            fila.appendChild(columna_numeroext)

            let columna_colonia = document.createElement("td")
            columna_colonia.setAttribute("class","texto")
            columna_colonia.innerHTML = coloniaEmpleado
            fila.appendChild(columna_colonia)

            
            let columna_telefono = document.createElement("td")
            columna_telefono.setAttribute("class","texto")
            columna_telefono.innerHTML = telefonoEmpleado
            fila.appendChild(columna_telefono)
            
            let columna_puesto = document.createElement("td")
            columna_puesto.setAttribute("class","texto")
            columna_puesto.innerHTML = puestoEmpleado
            fila.appendChild(columna_puesto)

            let columna_correo = document.createElement("td")
            columna_correo.setAttribute("class","texto")
            columna_correo.innerHTML = correoEmpleado
            fila.appendChild(columna_correo)

            let columna_activo = document.createElement("td")
            columna_activo.setAttribute("class","texto")
            columna_activo.innerHTML = activo
            fila.appendChild(columna_activo)

            let columna_tipo_usuario = document.createElement("td")
            columna_tipo_usuario.setAttribute("class","texto")
            columna_tipo_usuario.innerHTML = tipo_usuario
            fila.appendChild(columna_tipo_usuario)

            let columna_editar = document.createElement("td")
            let imagen_editar = document.createElement("img")
            imagen_editar.setAttribute("src","../recursos/img/alta.png")
            imagen_editar.setAttribute("class","img_accion")
            imagen_editar.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar)

            let imagen_editar2 = document.createElement("img")
            imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
            imagen_editar2.setAttribute("class","img_accion")
            imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
            columna_editar.appendChild(imagen_editar2)
            fila.appendChild(columna_editar)
            cuerpo_paginador.appendChild(fila) 
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }

    // cuerpo_paginador.innerHTML=cuerpo;
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
    
}
function paginador_anterior_empleadoNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador)
{
// pagina_actual--;
var cuerpo = "";
cuerpo_paginador.innerHTML = "";
var tamano = arreglo_rutas.length;
var inicio=pagina_actual-1;
inicio=inicio*cantidad_vistas;
var final=pagina_actual*cantidad_vistas;
var numero_paginas=tamano/cantidad_vistas;
numero_paginas=Math.ceil(numero_paginas);
if (pagina_actual==1)
{
btn_atras.style="visibility:hidden;";
btn_primera.style="visibility:hidden;";
}
else{
btn_atras.style="visibility:visible;";
btn_primera.style="visibility:visible;";
}

if (pagina_actual==numero_paginas) 
{
btn_adelante.style="visibility:hidden;";
btn_ultima.style="visibility:hidden;";
}
else{
btn_adelante.style="visibility:visible;";
btn_ultima.style="visibility:visible;";
}

var numero_clase=1;
for (inicio; inicio < final; inicio++) 
{
if (arreglo_rutas[inicio]!=undefined) 
{
    let id = arreglo_rutas[inicio].id
    let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
    let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
    let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
    let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
    let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
    let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
    let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
    let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
    let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_nombre = document.createElement("td")
    columna_nombre.setAttribute("class","texto")
    columna_nombre.innerHTML = nombreEmpleado
    fila.appendChild(columna_nombre)

    let columna_apellidop = document.createElement("td")
    columna_apellidop.setAttribute("class","texto")
    columna_apellidop.innerHTML = apellidopEmpleado
    fila.appendChild(columna_apellidop)

    let columna_apellidom = document.createElement("td")
    columna_apellidom.setAttribute("class","texto")
    columna_apellidom.innerHTML = apellidomEmpleado
    fila.appendChild(columna_apellidom)

    let columna_domicilio = document.createElement("td")
    columna_domicilio.setAttribute("class","texto")
    columna_domicilio.innerHTML = domicilioEmpleado
    fila.appendChild(columna_domicilio)

    let columna_numeroext = document.createElement("td")
    columna_numeroext.setAttribute("class","texto")
    columna_numeroext.innerHTML = numeroextEmpleado
    fila.appendChild(columna_numeroext)

    let columna_colonia = document.createElement("td")
    columna_colonia.setAttribute("class","texto")
    columna_colonia.innerHTML = coloniaEmpleado
    fila.appendChild(columna_colonia)

    
    let columna_telefono = document.createElement("td")
    columna_telefono.setAttribute("class","texto")
    columna_telefono.innerHTML = telefonoEmpleado
    fila.appendChild(columna_telefono)
    
    let columna_puesto = document.createElement("td")
    columna_puesto.setAttribute("class","texto")
    columna_puesto.innerHTML = puestoEmpleado
    fila.appendChild(columna_puesto)

    let columna_correo = document.createElement("td")
    columna_correo.setAttribute("class","texto")
    columna_correo.innerHTML = correoEmpleado
    fila.appendChild(columna_correo)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
    imagen_editar.setAttribute("src","../recursos/img/alta.png")
    imagen_editar.setAttribute("class","img_accion")
    imagen_editar.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar)

    let imagen_editar2 = document.createElement("img")
    imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
    imagen_editar2.setAttribute("class","img_accion")
    imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
    columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 

    var paso = true;
    if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
    if (numero_clase==2&&paso==true){numero_clase=1;}
}
}

// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_primera_empleadoNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

cuerpo_paginador.innerHTML = "";
var cuerpo = "";
pagina_actual=1;
var tamano = arreglo_rutas.length;
var inicio=pagina_actual-1;
inicio=inicio*cantidad_vistas;
var final=pagina_actual*cantidad_vistas;
var numero_paginas=tamano/cantidad_vistas;
numero_paginas=Math.ceil(numero_paginas);

if (pagina_actual==1)
{
btn_atras.style="visibility:hidden;";
btn_primera.style="visibility:hidden;";
}
else{
btn_atras.style="visibility:visible;";
btn_primera.style="visibility:visible;";
}

if (pagina_actual==numero_paginas) 
{
btn_adelante.style="visibility:hidden;";
btn_ultima.style="visibility:hidden;";
}
else{
btn_adelante.style="visibility:visible;";
btn_ultima.style="visibility:visible;";
}

var numero_clase=1;
for (inicio; inicio < final; inicio++) 
{
if (arreglo_rutas[inicio]!=undefined) 
{
    let id = arreglo_rutas[inicio].id
    let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
    let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
    let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
    let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
    let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
    let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
    let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
    let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
    let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_nombre = document.createElement("td")
    columna_nombre.setAttribute("class","texto")
    columna_nombre.innerHTML = nombreEmpleado
    fila.appendChild(columna_nombre)

    let columna_apellidop = document.createElement("td")
    columna_apellidop.setAttribute("class","texto")
    columna_apellidop.innerHTML = apellidopEmpleado
    fila.appendChild(columna_apellidop)

    let columna_apellidom = document.createElement("td")
    columna_apellidom.setAttribute("class","texto")
    columna_apellidom.innerHTML = apellidomEmpleado
    fila.appendChild(columna_apellidom)

    let columna_domicilio = document.createElement("td")
    columna_domicilio.setAttribute("class","texto")
    columna_domicilio.innerHTML = domicilioEmpleado
    fila.appendChild(columna_domicilio)

    let columna_numeroext = document.createElement("td")
    columna_numeroext.setAttribute("class","texto")
    columna_numeroext.innerHTML = numeroextEmpleado
    fila.appendChild(columna_numeroext)

    let columna_colonia = document.createElement("td")
    columna_colonia.setAttribute("class","texto")
    columna_colonia.innerHTML = coloniaEmpleado
    fila.appendChild(columna_colonia)

    
    let columna_telefono = document.createElement("td")
    columna_telefono.setAttribute("class","texto")
    columna_telefono.innerHTML = telefonoEmpleado
    fila.appendChild(columna_telefono)
    
    let columna_puesto = document.createElement("td")
    columna_puesto.setAttribute("class","texto")
    columna_puesto.innerHTML = puestoEmpleado
    fila.appendChild(columna_puesto)

    let columna_correo = document.createElement("td")
    columna_correo.setAttribute("class","texto")
    columna_correo.innerHTML = correoEmpleado
    fila.appendChild(columna_correo)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
    imagen_editar.setAttribute("src","../recursos/img/alta.png")
    imagen_editar.setAttribute("class","img_accion")
    imagen_editar.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar)

    let imagen_editar2 = document.createElement("img")
    imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
    imagen_editar2.setAttribute("class","img_accion")
    imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
    columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 
    
    var paso = true;
    if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
    if (numero_clase==2&&paso==true){numero_clase=1;}
}
}
// cuerpo_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_ultima_empleadoNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
var cuerpo = "";
cuerpo_paginador.innerHTML="";
var tamano = arreglo_rutas.length;
var numero_paginas=tamano/cantidad_vistas;
numero_paginas=Math.ceil(numero_paginas);
pagina_actual=numero_paginas;
var inicio=pagina_actual-1;
inicio=inicio*cantidad_vistas;
var final=pagina_actual*cantidad_vistas;


if (pagina_actual==1)
{
btn_atras.style="visibility:hidden;";
btn_primera.style="visibility:hidden;";
}
else{
btn_atras.style="visibility:visible;";
btn_primera.style="visibility:visible;";
}

if (pagina_actual==numero_paginas) 
{
btn_adelante.style="visibility:hidden;";
btn_ultima.style="visibility:hidden;";
}
else{
btn_adelante.style="visibility:visible;";
btn_ultima.style="visibility:visible;";
}

var numero_clase=1;
for (inicio; inicio < final; inicio++) 
{
if (arreglo_rutas[inicio]!=undefined) 
{
// arreglos
let id = arreglo_rutas[inicio].id
                        let nombreEmpleado = arreglo_rutas[inicio].nombreEmpleado
                        let apellidopEmpleado = arreglo_rutas[inicio].apellidopEmpleado
                        let apellidomEmpleado = arreglo_rutas[inicio].apellidomEmpleado
                        let domicilioEmpleado = arreglo_rutas[inicio].domicilioEmpleado
                        let numeroextEmpleado = arreglo_rutas[inicio].numeroextEmpleado
                        let coloniaEmpleado = arreglo_rutas[inicio].coloniaEmpleado
                        let telefonoEmpleado = arreglo_rutas[inicio].telefonoEmpleado
                        let puestoEmpleado = arreglo_rutas[inicio].puestoEmpleado
                        let correoEmpleado = arreglo_rutas[inicio].correoEmpleado
                        let activo  = arreglo_rutas[inicio].activo
                        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

                            let fila = document.createElement("tr")

                        let cadena_id = "id_"+id
                        fila.setAttribute("id",id)

                        let columna_id = document.createElement("td")
                        columna_id.setAttribute("class","texto")
                        columna_id.innerHTML = id
                        fila.appendChild(columna_id)

                        let columna_nombre = document.createElement("td")
                        columna_nombre.setAttribute("class","texto")
                        columna_nombre.innerHTML = nombreEmpleado
                        fila.appendChild(columna_nombre)

                        let columna_apellidop = document.createElement("td")
                        columna_apellidop.setAttribute("class","texto")
                        columna_apellidop.innerHTML = apellidopEmpleado
                        fila.appendChild(columna_apellidop)

                        let columna_apellidom = document.createElement("td")
                        columna_apellidom.setAttribute("class","texto")
                        columna_apellidom.innerHTML = apellidomEmpleado
                        fila.appendChild(columna_apellidom)

                        let columna_domicilio = document.createElement("td")
                        columna_domicilio.setAttribute("class","texto")
                        columna_domicilio.innerHTML = domicilioEmpleado
                        fila.appendChild(columna_domicilio)

                        let columna_numeroext = document.createElement("td")
                        columna_numeroext.setAttribute("class","texto")
                        columna_numeroext.innerHTML = numeroextEmpleado
                        fila.appendChild(columna_numeroext)

                        let columna_colonia = document.createElement("td")
                        columna_colonia.setAttribute("class","texto")
                        columna_colonia.innerHTML = coloniaEmpleado
                        fila.appendChild(columna_colonia)

                        
                        let columna_telefono = document.createElement("td")
                        columna_telefono.setAttribute("class","texto")
                        columna_telefono.innerHTML = telefonoEmpleado
                        fila.appendChild(columna_telefono)
                        
                        let columna_puesto = document.createElement("td")
                        columna_puesto.setAttribute("class","texto")
                        columna_puesto.innerHTML = puestoEmpleado
                        fila.appendChild(columna_puesto)

                        let columna_correo = document.createElement("td")
                        columna_correo.setAttribute("class","texto")
                        columna_correo.innerHTML = correoEmpleado
                        fila.appendChild(columna_correo)

                        let columna_activo = document.createElement("td")
                        columna_activo.setAttribute("class","texto")
                        columna_activo.innerHTML = activo
                        fila.appendChild(columna_activo)

                        let columna_tipo_usuario = document.createElement("td")
                        columna_tipo_usuario.setAttribute("class","texto")
                        columna_tipo_usuario.innerHTML = tipo_usuario
                        fila.appendChild(columna_tipo_usuario)

                        let columna_editar = document.createElement("td")
                        let imagen_editar = document.createElement("img")
                        imagen_editar.setAttribute("src","../recursos/img/alta.png")
                        imagen_editar.setAttribute("class","img_accion")
                        imagen_editar.setAttribute("onclick","activar_empleado(event);")
                        columna_editar.appendChild(imagen_editar)

                        let imagen_editar2 = document.createElement("img")
                        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
                        imagen_editar2.setAttribute("class","img_accion")
                        imagen_editar2.setAttribute("onclick","desactivar_usuario(event);")
                        columna_editar.appendChild(imagen_editar2)
                        fila.appendChild(columna_editar)
                        cuerpo_paginador.appendChild(fila) 

    var paso = true;
    if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
    if (numero_clase==2&&paso==true){numero_clase=1;}
}
}
// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}


//funciones para tomar empleados activos
var datos_empresas
var boton_primeroEmpresas = document.getElementById("boton_paginador_primeroEmpresas")
var boton_anteriorEmpresas = document.getElementById("boton_paginador_anteriorEmpresas")
var boton_siguienteEmpresas = document.getElementById("boton_paginador_siguienteEmpresas")
var boton_ultimoEmpresas = document.getElementById("boton_paginador_ultimoEmpresas")
var cuerpoEmpresas = document.getElementById("tabla_empresas_activas")
var indicador_paginaEmpresas= document.getElementById("boton_paginador_cantidadEmpresas")
var cantidad_vistasEmpresas = document.getElementById("cantidad_empresas_activas").value
var pagina_actual_empresas_activos = 1

function tomar_datos_empresas()
{
    let contenedor = document.getElementById("tabla_empresas_activas")

    contenedor.innerHTML = ""
    let ajax = new XMLHttpRequest()
       ajax.open("POST","../controlador/tomar_empresas_activas.php")
       ajax.send()
       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    //console.log(ajax.responseText)
                    datos_empresas = JSON.parse(ajax.responseText)
                    // console.log(datos)
                    paginador_empresas(datos_empresas,pagina_actual_empresas_activos,cantidad_vistasEmpresas,boton_anteriorEmpresas,boton_siguienteEmpresas,boton_primeroEmpresas,boton_ultimoEmpresas,cuerpoEmpresas,indicador_paginaEmpresas)

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

// agregar evento a botones de paginacion

boton_siguienteEmpresas.addEventListener("click", function(){
    pagina_actual_empresas_activos++
    paginador_siguiente_empresas(datos_empresas,pagina_actual_empresas_activos,cantidad_vistasEmpresas,boton_anteriorEmpresas,boton_siguienteEmpresas,boton_primeroEmpresas,boton_ultimoEmpresas,cuerpoEmpresas,indicador_paginaEmpresas)
})

boton_anteriorEmpresas.addEventListener("click", function(){
    pagina_actual_empresas_activos--
    paginador_anterior_empresas(datos_empresas,pagina_actual_empresas_activos,cantidad_vistasEmpresas,boton_anteriorEmpresas,boton_siguienteEmpresas,boton_primeroEmpresas,boton_ultimoEmpresas,cuerpoEmpresas,indicador_paginaEmpresas)
})

boton_primeroEmpresas.addEventListener("click", function(){
    pagina_actual_empresas_activos = 1 
    paginador_primera_empresas(datos_empresas,pagina_actual_empresas_activos,cantidad_vistasEmpresas,boton_anteriorEmpresas,boton_siguienteEmpresas,boton_primeroEmpresas,boton_ultimoEmpresas,cuerpoEmpresas,indicador_paginaEmpresas)
})

boton_ultimoEmpresas.addEventListener("click", function(){

    var tamano = datos_empresas.length;
    var numero_paginas=tamano/cantidad_vistasEmpresas;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual_empresas_activos = numero_paginas
    paginador_ultima_empresas(datos_empresas,pagina_actual_empresas_activos,cantidad_vistasEmpresas,boton_anteriorEmpresas,boton_siguienteEmpresas,boton_primeroEmpresas,boton_ultimoEmpresas,cuerpoEmpresas,indicador_paginaEmpresas)
})

function paginador_empresas(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (numero_paginas==0) 
    {
        numero_paginas=1;
    }
    if (pagina_actual==1)
    {

        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";

    }
    else
    {

        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
        
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;

    
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            if(arreglo_rutas[inicio]=="error 400")
            {
                cuerpo_paginador.innerHTML='<tr><td style="text-align: center;" colspan="13">NO HAY DATOS</td></tr>'
            }
            else
            {

                //crear columnas por cada json con arreglo_rutas[inicio]
                       
                let id = arreglo_rutas[inicio].id
                let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
                let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
                let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
                let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
                let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
                let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
                let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
                let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
                let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
                let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
                let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
                let activo  = arreglo_rutas[inicio].activo
                let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
                
                    let fila = document.createElement("tr")
                
                let cadena_id = "id_"+id
                fila.setAttribute("id",id)
                
                let columna_id = document.createElement("td")
                columna_id.setAttribute("class","texto")
                columna_id.innerHTML = id
                fila.appendChild(columna_id)
                
                let columna_rfcEmpresa = document.createElement("td")
                columna_rfcEmpresa.setAttribute("class","texto")
                columna_rfcEmpresa.innerHTML = rfcEmpresa
                fila.appendChild(columna_rfcEmpresa)
                
                let columna_nombreEmpresa = document.createElement("td")
                columna_nombreEmpresa.setAttribute("class","texto")
                columna_nombreEmpresa.innerHTML = nombreEmpresa
                fila.appendChild(columna_nombreEmpresa)
                
                let columna_razonsocialEmpresa = document.createElement("td")
                columna_razonsocialEmpresa.setAttribute("class","texto")
                columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
                fila.appendChild(columna_razonsocialEmpresa)
                
                let columna_domicilioEmpresa = document.createElement("td")
                columna_domicilioEmpresa.setAttribute("class","texto")
                columna_domicilioEmpresa.innerHTML = domicilioEmpresa
                fila.appendChild(columna_domicilioEmpresa)
                
                let columna_numerocalleEmpresa = document.createElement("td")
                columna_numerocalleEmpresa.setAttribute("class","texto")
                columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
                fila.appendChild(columna_numerocalleEmpresa)
                
                let columna_coloniaEmpresa = document.createElement("td")
                columna_coloniaEmpresa.setAttribute("class","texto")
                columna_coloniaEmpresa.innerHTML = coloniaEmpresa
                fila.appendChild(columna_coloniaEmpresa)
                
                let columna_cpEmpresa = document.createElement("td")
                columna_cpEmpresa.setAttribute("class","texto")
                columna_cpEmpresa.innerHTML = cpEmpresa
                fila.appendChild(columna_cpEmpresa)
                
                let columna_municipioEmpresa = document.createElement("td")
                columna_municipioEmpresa.setAttribute("class","texto")
                columna_municipioEmpresa.innerHTML = municipioEmpresa
                fila.appendChild(columna_municipioEmpresa)
                
                let columna_estadoEmpresa = document.createElement("td")
                columna_estadoEmpresa.setAttribute("class","texto")
                columna_estadoEmpresa.innerHTML = estadoEmpresa
                fila.appendChild(columna_estadoEmpresa)
                
                let columna_telefonoEmpresa = document.createElement("td")
                columna_telefonoEmpresa.setAttribute("class","texto")
                columna_telefonoEmpresa.innerHTML = telefonoEmpresa
                fila.appendChild(columna_telefonoEmpresa)
                
                
                let columna_correoEmpresa = document.createElement("td")
                columna_correoEmpresa.setAttribute("class","texto")
                columna_correoEmpresa.innerHTML = correoEmpresa
                fila.appendChild(columna_correoEmpresa)
                
                let columna_activo = document.createElement("td")
                columna_activo.setAttribute("class","texto")
                columna_activo.innerHTML = activo
                fila.appendChild(columna_activo)
                
                let columna_tipo_usuario = document.createElement("td")
                columna_tipo_usuario.setAttribute("class","texto")
                columna_tipo_usuario.innerHTML = tipo_usuario
                fila.appendChild(columna_tipo_usuario)
                
                let columna_editar = document.createElement("td")
                let imagen_editar = document.createElement("img")
                imagen_editar.setAttribute("src","../recursos/img/baja.png")
                imagen_editar.setAttribute("class","img_accion")
                imagen_editar.setAttribute("onclick","desactivar_empresas(event);")
                columna_editar.appendChild(imagen_editar)
                
                let imagen_editar2 = document.createElement("img")
                imagen_editar2.setAttribute("src","../recursos/img/modificar.png")
                imagen_editar2.setAttribute("class","img_accion")
                imagen_editar2.setAttribute("onclick","desactivar_empresas(event);")
                columna_editar.appendChild(imagen_editar2)
                fila.appendChild(columna_editar)
                cuerpo_paginador.appendChild(fila) 
            }	
            // console.log(arreglo_rutas[inicio]);
            var paso = true;
            if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
            if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_siguiente_empresas(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    // pagina_actual++;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";

    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);


    if (pagina_actual==1)
    {
        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";
    }
    else{
        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }


    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            let id = arreglo_rutas[inicio].id
            let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
            let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
            let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
            let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
            let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
            let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
            let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
            let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
            let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
            let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
            let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
            let activo  = arreglo_rutas[inicio].activo
            let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

            let cadena_id = "id_"+id
            fila.setAttribute("id",id)

            let columna_id = document.createElement("td")
            columna_id.setAttribute("class","texto")
            columna_id.innerHTML = id
            fila.appendChild(columna_id)

            let columna_rfcEmpresa = document.createElement("td")
            columna_rfcEmpresa.setAttribute("class","texto")
            columna_rfcEmpresa.innerHTML = rfcEmpresa
            fila.appendChild(columna_rfcEmpresa)

            let columna_nombreEmpresa = document.createElement("td")
            columna_nombreEmpresa.setAttribute("class","texto")
            columna_nombreEmpresa.innerHTML = nombreEmpresa
            fila.appendChild(columna_nombreEmpresa)

            let columna_razonsocialEmpresa = document.createElement("td")
            columna_razonsocialEmpresa.setAttribute("class","texto")
            columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
            fila.appendChild(columna_razonsocialEmpresa)

            let columna_domicilioEmpresa = document.createElement("td")
            columna_domicilioEmpresa.setAttribute("class","texto")
            columna_domicilioEmpresa.innerHTML = domicilioEmpresa
            fila.appendChild(columna_domicilioEmpresa)

            let columna_numerocalleEmpresa = document.createElement("td")
            columna_numerocalleEmpresa.setAttribute("class","texto")
            columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
            fila.appendChild(columna_numerocalleEmpresa)

            let columna_coloniaEmpresa = document.createElement("td")
            columna_coloniaEmpresa.setAttribute("class","texto")
            columna_coloniaEmpresa.innerHTML = coloniaEmpresa
            fila.appendChild(columna_coloniaEmpresa)

            let columna_cpEmpresa = document.createElement("td")
            columna_cpEmpresa.setAttribute("class","texto")
            columna_cpEmpresa.innerHTML = cpEmpresa
            fila.appendChild(columna_cpEmpresa)

            let columna_municipioEmpresa = document.createElement("td")
            columna_municipioEmpresa.setAttribute("class","texto")
            columna_municipioEmpresa.innerHTML = municipioEmpresa
            fila.appendChild(columna_municipioEmpresa)

            let columna_estadoEmpresa = document.createElement("td")
            columna_estadoEmpresa.setAttribute("class","texto")
            columna_estadoEmpresa.innerHTML = estadoEmpresa
            fila.appendChild(columna_estadoEmpresa)

            let columna_telefonoEmpresa = document.createElement("td")
            columna_telefonoEmpresa.setAttribute("class","texto")
            columna_telefonoEmpresa.innerHTML = telefonoEmpresa
            fila.appendChild(columna_telefonoEmpresa)


            let columna_correoEmpresa = document.createElement("td")
            columna_correoEmpresa.setAttribute("class","texto")
            columna_correoEmpresa.innerHTML = correoEmpresa
            fila.appendChild(columna_correoEmpresa)

            let columna_activo = document.createElement("td")
            columna_activo.setAttribute("class","texto")
            columna_activo.innerHTML = activo
            fila.appendChild(columna_activo)

            let columna_tipo_usuario = document.createElement("td")
            columna_tipo_usuario.setAttribute("class","texto")
            columna_tipo_usuario.innerHTML = tipo_usuario
            fila.appendChild(columna_tipo_usuario)

            let columna_editar = document.createElement("td")
            let imagen_editar = document.createElement("img")
            imagen_editar.setAttribute("src","../recursos/img/baja.png")
            imagen_editar.setAttribute("class","img_accion")
            imagen_editar.setAttribute("onclick","desactivar_empresas(event);")
            columna_editar.appendChild(imagen_editar)

            let imagen_editar2 = document.createElement("img")
            imagen_editar2.setAttribute("src","../recursos/img/modificar.png")
            imagen_editar2.setAttribute("class","img_accion")
            imagen_editar2.setAttribute("onclick","desactivar_empresas(event);")
            columna_editar.appendChild(imagen_editar2)
            fila.appendChild(columna_editar)
            cuerpo_paginador.appendChild(fila) 
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }

    // cuerpo_paginador.innerHTML=cuerpo;
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
    
}
function paginador_anterior_empresas(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador)
{
// pagina_actual--;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

        let cadena_id = "id_"+id
        fila.setAttribute("id",id)

        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)

        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)

        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)

        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)

        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)

        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)

        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)

        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)

        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)

        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)

        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)


        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)

        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)

        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)

        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/baja.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","desactivar_empresas(event);")
        columna_editar.appendChild(imagen_editar)

        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/modificar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","desactivar_empresas(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}

// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_primera_empresas(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    cuerpo_paginador.innerHTML = "";
    var cuerpo = "";
    pagina_actual=1;
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
        
            let fila = document.createElement("tr")
        
        let cadena_id = "id_"+id
        fila.setAttribute("id",id)
        
        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)
        
        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)
        
        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)
        
        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)
        
        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)
        
        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)
        
        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)
        
        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)
        
        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)
        
        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)
        
        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)
        
        
        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)
        
        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)
        
        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)
        
        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/baja.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","desactivar_empresas(event);")
        columna_editar.appendChild(imagen_editar)
        
        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/modificar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","desactivar_empresas(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 
        
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_ultima_empresas(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    var cuerpo = "";
    cuerpo_paginador.innerHTML="";
    var tamano = arreglo_rutas.length;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual=numero_paginas;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;


    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
    // arreglos
    let id = arreglo_rutas[inicio].id
    let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
    let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
    let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
    let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
    let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
    let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
    let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
    let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
    let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
    let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
    let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_rfcEmpresa = document.createElement("td")
    columna_rfcEmpresa.setAttribute("class","texto")
    columna_rfcEmpresa.innerHTML = rfcEmpresa
    fila.appendChild(columna_rfcEmpresa)

    let columna_nombreEmpresa = document.createElement("td")
    columna_nombreEmpresa.setAttribute("class","texto")
    columna_nombreEmpresa.innerHTML = nombreEmpresa
    fila.appendChild(columna_nombreEmpresa)

    let columna_razonsocialEmpresa = document.createElement("td")
    columna_razonsocialEmpresa.setAttribute("class","texto")
    columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
    fila.appendChild(columna_razonsocialEmpresa)

    let columna_domicilioEmpresa = document.createElement("td")
    columna_domicilioEmpresa.setAttribute("class","texto")
    columna_domicilioEmpresa.innerHTML = domicilioEmpresa
    fila.appendChild(columna_domicilioEmpresa)

    let columna_numerocalleEmpresa = document.createElement("td")
    columna_numerocalleEmpresa.setAttribute("class","texto")
    columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
    fila.appendChild(columna_numerocalleEmpresa)

    let columna_coloniaEmpresa = document.createElement("td")
    columna_coloniaEmpresa.setAttribute("class","texto")
    columna_coloniaEmpresa.innerHTML = coloniaEmpresa
    fila.appendChild(columna_coloniaEmpresa)

    let columna_cpEmpresa = document.createElement("td")
    columna_cpEmpresa.setAttribute("class","texto")
    columna_cpEmpresa.innerHTML = cpEmpresa
    fila.appendChild(columna_cpEmpresa)

    let columna_municipioEmpresa = document.createElement("td")
    columna_municipioEmpresa.setAttribute("class","texto")
    columna_municipioEmpresa.innerHTML = municipioEmpresa
    fila.appendChild(columna_municipioEmpresa)

    let columna_estadoEmpresa = document.createElement("td")
    columna_estadoEmpresa.setAttribute("class","texto")
    columna_estadoEmpresa.innerHTML = estadoEmpresa
    fila.appendChild(columna_estadoEmpresa)

    let columna_telefonoEmpresa = document.createElement("td")
    columna_telefonoEmpresa.setAttribute("class","texto")
    columna_telefonoEmpresa.innerHTML = telefonoEmpresa
    fila.appendChild(columna_telefonoEmpresa)


    let columna_correoEmpresa = document.createElement("td")
    columna_correoEmpresa.setAttribute("class","texto")
    columna_correoEmpresa.innerHTML = correoEmpresa
    fila.appendChild(columna_correoEmpresa)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
    imagen_editar.setAttribute("src","../recursos/img/baja.png")
    imagen_editar.setAttribute("class","img_accion")
    imagen_editar.setAttribute("onclick","desactivar_empresas(event);")
    columna_editar.appendChild(imagen_editar)

    let imagen_editar2 = document.createElement("img")
    imagen_editar2.setAttribute("src","../recursos/img/modificar.png")
    imagen_editar2.setAttribute("class","img_accion")
    imagen_editar2.setAttribute("onclick","desactivar_empresas(event);")
    columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}



//funciones para tomar empleados activos
var datos_empresasNo
var boton_primeroEmpresasNo = document.getElementById("boton_paginador_primeroEmpresasNo")
var boton_anteriorEmpresasNo = document.getElementById("boton_paginador_anteriorEmpresasNo")
var boton_siguienteEmpresasNo = document.getElementById("boton_paginador_siguienteEmpresasNo")
var boton_ultimoEmpresasNo = document.getElementById("boton_paginador_ultimoEmpresasNo")
var cuerpoEmpresasNo = document.getElementById("tabla_empresas_noactivas")
var indicador_paginaEmpresasNo= document.getElementById("boton_paginador_cantidadEmpresasNo")
var cantidad_vistasEmpresasNo = document.getElementById("cantidad_empresas_noactivos").value
var pagina_actual_empresas_noactivos = 1

function tomar_datos_empresas_noactivas()
{
    let contenedor = document.getElementById("tabla_empresas_noactivas")

    contenedor.innerHTML = ""
    let ajax = new XMLHttpRequest()
       ajax.open("POST","../controlador/tomar_empresas_noactivas.php")
       ajax.send()
       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    //console.log(ajax.responseText)
                    datos_empresasNo = JSON.parse(ajax.responseText)
                    // console.log(datos)
                    paginador_empresasNo(datos_empresasNo,pagina_actual_empresas_noactivos,cantidad_vistasEmpresasNo,boton_anteriorEmpresasNo,boton_siguienteEmpresasNo,boton_primeroEmpresasNo,boton_ultimoEmpresasNo,cuerpoEmpresasNo,indicador_paginaEmpresasNo)

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

// agregar evento a botones de paginacion

boton_siguienteEmpresasNo.addEventListener("click", function(){
    pagina_actual_empresas_noactivos++
    paginador_siguiente_empresasNo(datos_empresasNo,pagina_actual_empresas_noactivos,cantidad_vistasEmpresasNo,boton_anteriorEmpresasNo,boton_siguienteEmpresasNo,boton_primeroEmpresasNo,boton_ultimoEmpresasNo,cuerpoEmpresasNo,indicador_paginaEmpresasNo)
})

boton_anteriorEmpresasNo.addEventListener("click", function(){
    pagina_actual_empresas_noactivos--
    (datos_empresasNo,pagina_actual_empresas_noactivos,cantidad_vistasEmpresasNo,boton_anteriorEmpresasNo,boton_siguienteEmpresasNo,boton_primeroEmpresasNo,boton_ultimoEmpresasNo,cuerpoEmpresasNo,indicador_paginaEmpresasNo)
})

boton_primeroEmpresasNo.addEventListener("click", function(){
    pagina_actual_empresas_noactivos = 1 
    paginador_primera_empresasNo(datos_empresasNo,pagina_actual_empresas_noactivos,cantidad_vistasEmpresasNo,boton_anteriorEmpresasNo,boton_siguienteEmpresasNo,boton_primeroEmpresasNo,boton_ultimoEmpresasNo,cuerpoEmpresasNo,indicador_paginaEmpresasNo)
})

boton_ultimoEmpresasNo.addEventListener("click", function(){

    var tamano = datos_empresasNo.length;
    var numero_paginas=tamano/cantidad_vistasEmpresasNo;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual_empresas_noactivos = numero_paginas
    paginador_ultima_empresasNo(datos_empresasNo,pagina_actual_empresas_noactivos,cantidad_vistasEmpresasNo,boton_anteriorEmpresasNo,boton_siguienteEmpresasNo,boton_primeroEmpresasNo,boton_ultimoEmpresasNo,cuerpoEmpresasNo,indicador_paginaEmpresasNo)
})

function paginador_empresasNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (numero_paginas==0) 
    {
        numero_paginas=1;
    }
    if (pagina_actual==1)
    {

        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";

    }
    else
    {

        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
        
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;

    
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            if(arreglo_rutas[inicio]=="error 400")
            {
                cuerpo_paginador.innerHTML='<tr><td style="text-align: center;" colspan="13">NO HAY DATOS</td></tr>'
            }
            else
            {

                //crear columnas por cada json con arreglo_rutas[inicio]
                       
                let id = arreglo_rutas[inicio].id
                let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
                let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
                let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
                let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
                let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
                let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
                let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
                let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
                let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
                let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
                let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
                let activo  = arreglo_rutas[inicio].activo
                let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
                
                    let fila = document.createElement("tr")
                
                let cadena_id = "id_"+id
                fila.setAttribute("id",id)
                
                let columna_id = document.createElement("td")
                columna_id.setAttribute("class","texto")
                columna_id.innerHTML = id
                fila.appendChild(columna_id)
                
                let columna_rfcEmpresa = document.createElement("td")
                columna_rfcEmpresa.setAttribute("class","texto")
                columna_rfcEmpresa.innerHTML = rfcEmpresa
                fila.appendChild(columna_rfcEmpresa)
                
                let columna_nombreEmpresa = document.createElement("td")
                columna_nombreEmpresa.setAttribute("class","texto")
                columna_nombreEmpresa.innerHTML = nombreEmpresa
                fila.appendChild(columna_nombreEmpresa)
                
                let columna_razonsocialEmpresa = document.createElement("td")
                columna_razonsocialEmpresa.setAttribute("class","texto")
                columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
                fila.appendChild(columna_razonsocialEmpresa)
                
                let columna_domicilioEmpresa = document.createElement("td")
                columna_domicilioEmpresa.setAttribute("class","texto")
                columna_domicilioEmpresa.innerHTML = domicilioEmpresa
                fila.appendChild(columna_domicilioEmpresa)
                
                let columna_numerocalleEmpresa = document.createElement("td")
                columna_numerocalleEmpresa.setAttribute("class","texto")
                columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
                fila.appendChild(columna_numerocalleEmpresa)
                
                let columna_coloniaEmpresa = document.createElement("td")
                columna_coloniaEmpresa.setAttribute("class","texto")
                columna_coloniaEmpresa.innerHTML = coloniaEmpresa
                fila.appendChild(columna_coloniaEmpresa)
                
                let columna_cpEmpresa = document.createElement("td")
                columna_cpEmpresa.setAttribute("class","texto")
                columna_cpEmpresa.innerHTML = cpEmpresa
                fila.appendChild(columna_cpEmpresa)
                
                let columna_municipioEmpresa = document.createElement("td")
                columna_municipioEmpresa.setAttribute("class","texto")
                columna_municipioEmpresa.innerHTML = municipioEmpresa
                fila.appendChild(columna_municipioEmpresa)
                
                let columna_estadoEmpresa = document.createElement("td")
                columna_estadoEmpresa.setAttribute("class","texto")
                columna_estadoEmpresa.innerHTML = estadoEmpresa
                fila.appendChild(columna_estadoEmpresa)
                
                let columna_telefonoEmpresa = document.createElement("td")
                columna_telefonoEmpresa.setAttribute("class","texto")
                columna_telefonoEmpresa.innerHTML = telefonoEmpresa
                fila.appendChild(columna_telefonoEmpresa)
                
                
                let columna_correoEmpresa = document.createElement("td")
                columna_correoEmpresa.setAttribute("class","texto")
                columna_correoEmpresa.innerHTML = correoEmpresa
                fila.appendChild(columna_correoEmpresa)
                
                let columna_activo = document.createElement("td")
                columna_activo.setAttribute("class","texto")
                columna_activo.innerHTML = activo
                fila.appendChild(columna_activo)
                
                let columna_tipo_usuario = document.createElement("td")
                columna_tipo_usuario.setAttribute("class","texto")
                columna_tipo_usuario.innerHTML = tipo_usuario
                fila.appendChild(columna_tipo_usuario)
                
                let columna_editar = document.createElement("td")
                let imagen_editar = document.createElement("img")
                imagen_editar.setAttribute("src","../recursos/img/alta.png")
                imagen_editar.setAttribute("class","img_accion")
                imagen_editar.setAttribute("onclick","activar_empleado(event);")
                columna_editar.appendChild(imagen_editar)
                
                let imagen_editar2 = document.createElement("img")
                imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
                imagen_editar2.setAttribute("class","img_accion")
                imagen_editar2.setAttribute("onclick","activar_empleado(event);")
                columna_editar.appendChild(imagen_editar2)
                fila.appendChild(columna_editar)
                cuerpo_paginador.appendChild(fila) 
            }	
            // console.log(arreglo_rutas[inicio]);
            var paso = true;
            if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
            if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_siguiente_empresasNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    // pagina_actual++;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";

    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);


    if (pagina_actual==1)
    {
        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";
    }
    else{
        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }


    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            let id = arreglo_rutas[inicio].id
            let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
            let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
            let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
            let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
            let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
            let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
            let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
            let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
            let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
            let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
            let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
            let activo  = arreglo_rutas[inicio].activo
            let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

            let cadena_id = "id_"+id
            fila.setAttribute("id",id)

            let columna_id = document.createElement("td")
            columna_id.setAttribute("class","texto")
            columna_id.innerHTML = id
            fila.appendChild(columna_id)

            let columna_rfcEmpresa = document.createElement("td")
            columna_rfcEmpresa.setAttribute("class","texto")
            columna_rfcEmpresa.innerHTML = rfcEmpresa
            fila.appendChild(columna_rfcEmpresa)

            let columna_nombreEmpresa = document.createElement("td")
            columna_nombreEmpresa.setAttribute("class","texto")
            columna_nombreEmpresa.innerHTML = nombreEmpresa
            fila.appendChild(columna_nombreEmpresa)

            let columna_razonsocialEmpresa = document.createElement("td")
            columna_razonsocialEmpresa.setAttribute("class","texto")
            columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
            fila.appendChild(columna_razonsocialEmpresa)

            let columna_domicilioEmpresa = document.createElement("td")
            columna_domicilioEmpresa.setAttribute("class","texto")
            columna_domicilioEmpresa.innerHTML = domicilioEmpresa
            fila.appendChild(columna_domicilioEmpresa)

            let columna_numerocalleEmpresa = document.createElement("td")
            columna_numerocalleEmpresa.setAttribute("class","texto")
            columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
            fila.appendChild(columna_numerocalleEmpresa)

            let columna_coloniaEmpresa = document.createElement("td")
            columna_coloniaEmpresa.setAttribute("class","texto")
            columna_coloniaEmpresa.innerHTML = coloniaEmpresa
            fila.appendChild(columna_coloniaEmpresa)

            let columna_cpEmpresa = document.createElement("td")
            columna_cpEmpresa.setAttribute("class","texto")
            columna_cpEmpresa.innerHTML = cpEmpresa
            fila.appendChild(columna_cpEmpresa)

            let columna_municipioEmpresa = document.createElement("td")
            columna_municipioEmpresa.setAttribute("class","texto")
            columna_municipioEmpresa.innerHTML = municipioEmpresa
            fila.appendChild(columna_municipioEmpresa)

            let columna_estadoEmpresa = document.createElement("td")
            columna_estadoEmpresa.setAttribute("class","texto")
            columna_estadoEmpresa.innerHTML = estadoEmpresa
            fila.appendChild(columna_estadoEmpresa)

            let columna_telefonoEmpresa = document.createElement("td")
            columna_telefonoEmpresa.setAttribute("class","texto")
            columna_telefonoEmpresa.innerHTML = telefonoEmpresa
            fila.appendChild(columna_telefonoEmpresa)


            let columna_correoEmpresa = document.createElement("td")
            columna_correoEmpresa.setAttribute("class","texto")
            columna_correoEmpresa.innerHTML = correoEmpresa
            fila.appendChild(columna_correoEmpresa)

            let columna_activo = document.createElement("td")
            columna_activo.setAttribute("class","texto")
            columna_activo.innerHTML = activo
            fila.appendChild(columna_activo)

            let columna_tipo_usuario = document.createElement("td")
            columna_tipo_usuario.setAttribute("class","texto")
            columna_tipo_usuario.innerHTML = tipo_usuario
            fila.appendChild(columna_tipo_usuario)

            let columna_editar = document.createElement("td")
            let imagen_editar = document.createElement("img")
            imagen_editar.setAttribute("src","../recursos/img/alta.png")
            imagen_editar.setAttribute("class","img_accion")
            imagen_editar.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar)

            let imagen_editar2 = document.createElement("img")
            imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
            imagen_editar2.setAttribute("class","img_accion")
            imagen_editar2.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar2)
            fila.appendChild(columna_editar)
            cuerpo_paginador.appendChild(fila) 
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }

    // cuerpo_paginador.innerHTML=cuerpo;
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
    
}
function paginador_anterior_empresasNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador)
{
// pagina_actual--;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

        let cadena_id = "id_"+id
        fila.setAttribute("id",id)

        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)

        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)

        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)

        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)

        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)

        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)

        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)

        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)

        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)

        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)

        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)


        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)

        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)

        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)

        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/alta.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar)

        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}

// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_primera_empresasNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    cuerpo_paginador.innerHTML = "";
    var cuerpo = "";
    pagina_actual=1;
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
        
            let fila = document.createElement("tr")
        
        let cadena_id = "id_"+id
        fila.setAttribute("id",id)
        
        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)
        
        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)
        
        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)
        
        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)
        
        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)
        
        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)
        
        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)
        
        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)
        
        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)
        
        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)
        
        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)
        
        
        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)
        
        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)
        
        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)
        
        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/alta.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar)
        
        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 
        
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_ultima_empresasNo(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    var cuerpo = "";
    cuerpo_paginador.innerHTML="";
    var tamano = arreglo_rutas.length;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual=numero_paginas;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;


    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
    // arreglos
    let id = arreglo_rutas[inicio].id
    let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
    let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
    let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
    let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
    let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
    let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
    let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
    let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
    let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
    let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
    let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_rfcEmpresa = document.createElement("td")
    columna_rfcEmpresa.setAttribute("class","texto")
    columna_rfcEmpresa.innerHTML = rfcEmpresa
    fila.appendChild(columna_rfcEmpresa)

    let columna_nombreEmpresa = document.createElement("td")
    columna_nombreEmpresa.setAttribute("class","texto")
    columna_nombreEmpresa.innerHTML = nombreEmpresa
    fila.appendChild(columna_nombreEmpresa)

    let columna_razonsocialEmpresa = document.createElement("td")
    columna_razonsocialEmpresa.setAttribute("class","texto")
    columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
    fila.appendChild(columna_razonsocialEmpresa)

    let columna_domicilioEmpresa = document.createElement("td")
    columna_domicilioEmpresa.setAttribute("class","texto")
    columna_domicilioEmpresa.innerHTML = domicilioEmpresa
    fila.appendChild(columna_domicilioEmpresa)

    let columna_numerocalleEmpresa = document.createElement("td")
    columna_numerocalleEmpresa.setAttribute("class","texto")
    columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
    fila.appendChild(columna_numerocalleEmpresa)

    let columna_coloniaEmpresa = document.createElement("td")
    columna_coloniaEmpresa.setAttribute("class","texto")
    columna_coloniaEmpresa.innerHTML = coloniaEmpresa
    fila.appendChild(columna_coloniaEmpresa)

    let columna_cpEmpresa = document.createElement("td")
    columna_cpEmpresa.setAttribute("class","texto")
    columna_cpEmpresa.innerHTML = cpEmpresa
    fila.appendChild(columna_cpEmpresa)

    let columna_municipioEmpresa = document.createElement("td")
    columna_municipioEmpresa.setAttribute("class","texto")
    columna_municipioEmpresa.innerHTML = municipioEmpresa
    fila.appendChild(columna_municipioEmpresa)

    let columna_estadoEmpresa = document.createElement("td")
    columna_estadoEmpresa.setAttribute("class","texto")
    columna_estadoEmpresa.innerHTML = estadoEmpresa
    fila.appendChild(columna_estadoEmpresa)

    let columna_telefonoEmpresa = document.createElement("td")
    columna_telefonoEmpresa.setAttribute("class","texto")
    columna_telefonoEmpresa.innerHTML = telefonoEmpresa
    fila.appendChild(columna_telefonoEmpresa)


    let columna_correoEmpresa = document.createElement("td")
    columna_correoEmpresa.setAttribute("class","texto")
    columna_correoEmpresa.innerHTML = correoEmpresa
    fila.appendChild(columna_correoEmpresa)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
    imagen_editar.setAttribute("src","../recursos/img/alta.png")
    imagen_editar.setAttribute("class","img_accion")
    imagen_editar.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar)

    let imagen_editar2 = document.createElement("img")
    imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
    imagen_editar2.setAttribute("class","img_accion")
    imagen_editar2.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}


//funciones para tomar empleados activos
var datos_empresasPendientes
var boton_primeroEmpresasPendientes = document.getElementById("boton_paginador_primeroEmpresasPendientes")
var boton_anteriorEmpresasPendientes = document.getElementById("boton_paginador_anteriorEmpresasPendientes")
var boton_siguienteEmpresasPendientes = document.getElementById("boton_paginador_siguienteEmpresasPendientes")
var boton_ultimoEmpresasPendientes = document.getElementById("boton_paginador_ultimoEmpresasPendientes")
var cuerpoEmpresasPendientes = document.getElementById("tabla_empresas_peticion")
var indicador_paginaEmpresasPendientes= document.getElementById("boton_paginador_cantidadEmpresasPendientes")
var cantidad_vistasEmpresasPendientes = document.getElementById("cantidad_empresas_pendientes").value
var pagina_actual_empresas_Pendientes = 1

function tomar_datos_empresas_peticion()
{
    let contenedor = document.getElementById("tabla_empresas_peticion")

    contenedor.innerHTML = ""
    let ajax = new XMLHttpRequest()
       ajax.open("POST","../controlador/tomar_empresas_pendientes.php")
       ajax.send()
       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    //console.log(ajax.responseText)
                    datos_empresasPendientes = JSON.parse(ajax.responseText)
                    // console.log(datos)
                    paginador_empresasPendientes(datos_empresasPendientes,pagina_actual_empresas_Pendientes,cantidad_vistasEmpresasPendientes,boton_anteriorEmpresasPendientes,boton_siguienteEmpresasPendientes,boton_primeroEmpresasPendientes,boton_ultimoEmpresasPendientes,cuerpoEmpresasPendientes,indicador_paginaEmpresasPendientes)

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

// agregar evento a botones de paginacion

boton_siguienteEmpresasPendientes.addEventListener("click", function(){
    pagina_actual_empresas_Pendientes++
    paginador_siguiente_empresasPendientes(datos_empresasPendientes,pagina_actual_empresas_Pendientes,cantidad_vistasEmpresasPendientes,boton_anteriorEmpresasPendientes,boton_siguienteEmpresasPendientes,boton_primeroEmpresasPendientes,boton_ultimoEmpresasPendientes,cuerpoEmpresasPendientes,indicador_paginaEmpresasPendientes)
})

boton_anteriorEmpresasPendientes.addEventListener("click", function(){
    pagina_actual_empresas_Pendientes--
    paginador_anterior_empresasPendientes(datos_empresasPendientes,pagina_actual_empresas_Pendientes,cantidad_vistasEmpresasPendientes,boton_anteriorEmpresasPendientes,boton_siguienteEmpresasPendientes,boton_primeroEmpresasPendientes,boton_ultimoEmpresasPendientes,cuerpoEmpresasPendientes,indicador_paginaEmpresasPendientes)
})

boton_primeroEmpresasPendientes.addEventListener("click", function(){
    pagina_actual_empresas_Pendientes = 1 
    paginador_primera_empresasPendientes(datos_empresasPendientes,pagina_actual_empresas_Pendientes,cantidad_vistasEmpresasPendientes,boton_anteriorEmpresasPendientes,boton_siguienteEmpresasPendientes,boton_primeroEmpresasPendientes,boton_ultimoEmpresasPendientes,cuerpoEmpresasPendientes,indicador_paginaEmpresasPendientes)
})

boton_ultimoEmpresasPendientes.addEventListener("click", function(){

    var tamano = datos_empresasPendientes.length;
    var numero_paginas=tamano/cantidad_vistasEmpresasPendientes;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual_empresas_Pendientes = numero_paginas
    paginador_ultima_empresasPendientes(datos_empresasPendientes,pagina_actual_empresas_Pendientes,cantidad_vistasEmpresasPendientes,boton_anteriorEmpresasPendientes,boton_siguienteEmpresasPendientes,boton_primeroEmpresasPendientes,boton_ultimoEmpresasPendientes,cuerpoEmpresasPendientes,indicador_paginaEmpresasPendientes)
})

function paginador_empresasPendientes(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (numero_paginas==0) 
    {
        numero_paginas=1;
    }
    if (pagina_actual==1)
    {

        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";

    }
    else
    {

        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
        
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;

    
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            if(arreglo_rutas[inicio]=="error 400")
            {
                cuerpo_paginador.innerHTML='<tr><td style="text-align: center;" colspan="13">NO HAY DATOS</td></tr>'
            }
            else
            {

                //crear columnas por cada json con arreglo_rutas[inicio]
                       
                let id = arreglo_rutas[inicio].id
                let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
                let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
                let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
                let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
                let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
                let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
                let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
                let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
                let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
                let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
                let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
                let activo  = arreglo_rutas[inicio].activo
                let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
                
                    let fila = document.createElement("tr")
                
                let cadena_id = "id_"+id
                fila.setAttribute("id",id)
                
                let columna_id = document.createElement("td")
                columna_id.setAttribute("class","texto")
                columna_id.innerHTML = id
                fila.appendChild(columna_id)
                
                let columna_rfcEmpresa = document.createElement("td")
                columna_rfcEmpresa.setAttribute("class","texto")
                columna_rfcEmpresa.innerHTML = rfcEmpresa
                fila.appendChild(columna_rfcEmpresa)
                
                let columna_nombreEmpresa = document.createElement("td")
                columna_nombreEmpresa.setAttribute("class","texto")
                columna_nombreEmpresa.innerHTML = nombreEmpresa
                fila.appendChild(columna_nombreEmpresa)
                
                let columna_razonsocialEmpresa = document.createElement("td")
                columna_razonsocialEmpresa.setAttribute("class","texto")
                columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
                fila.appendChild(columna_razonsocialEmpresa)
                
                let columna_domicilioEmpresa = document.createElement("td")
                columna_domicilioEmpresa.setAttribute("class","texto")
                columna_domicilioEmpresa.innerHTML = domicilioEmpresa
                fila.appendChild(columna_domicilioEmpresa)
                
                let columna_numerocalleEmpresa = document.createElement("td")
                columna_numerocalleEmpresa.setAttribute("class","texto")
                columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
                fila.appendChild(columna_numerocalleEmpresa)
                
                let columna_coloniaEmpresa = document.createElement("td")
                columna_coloniaEmpresa.setAttribute("class","texto")
                columna_coloniaEmpresa.innerHTML = coloniaEmpresa
                fila.appendChild(columna_coloniaEmpresa)
                
                let columna_cpEmpresa = document.createElement("td")
                columna_cpEmpresa.setAttribute("class","texto")
                columna_cpEmpresa.innerHTML = cpEmpresa
                fila.appendChild(columna_cpEmpresa)
                
                let columna_municipioEmpresa = document.createElement("td")
                columna_municipioEmpresa.setAttribute("class","texto")
                columna_municipioEmpresa.innerHTML = municipioEmpresa
                fila.appendChild(columna_municipioEmpresa)
                
                let columna_estadoEmpresa = document.createElement("td")
                columna_estadoEmpresa.setAttribute("class","texto")
                columna_estadoEmpresa.innerHTML = estadoEmpresa
                fila.appendChild(columna_estadoEmpresa)
                
                let columna_telefonoEmpresa = document.createElement("td")
                columna_telefonoEmpresa.setAttribute("class","texto")
                columna_telefonoEmpresa.innerHTML = telefonoEmpresa
                fila.appendChild(columna_telefonoEmpresa)
                
                
                let columna_correoEmpresa = document.createElement("td")
                columna_correoEmpresa.setAttribute("class","texto")
                columna_correoEmpresa.innerHTML = correoEmpresa
                fila.appendChild(columna_correoEmpresa)
                
                let columna_activo = document.createElement("td")
                columna_activo.setAttribute("class","texto")
                columna_activo.innerHTML = activo
                fila.appendChild(columna_activo)
                
                let columna_tipo_usuario = document.createElement("td")
                columna_tipo_usuario.setAttribute("class","texto")
                columna_tipo_usuario.innerHTML = tipo_usuario
                fila.appendChild(columna_tipo_usuario)
                
                let columna_editar = document.createElement("td")
                let imagen_editar = document.createElement("img")
                imagen_editar.setAttribute("src","../recursos/img/alta.png")
                imagen_editar.setAttribute("class","img_accion")
                imagen_editar.setAttribute("onclick","activar_empleado(event);")
                columna_editar.appendChild(imagen_editar)
                
                let imagen_editar2 = document.createElement("img")
                imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
                imagen_editar2.setAttribute("class","img_accion")
                imagen_editar2.setAttribute("onclick","activar_empleado(event);")
                columna_editar.appendChild(imagen_editar2)
                fila.appendChild(columna_editar)
                cuerpo_paginador.appendChild(fila) 
            }	
            // console.log(arreglo_rutas[inicio]);
            var paso = true;
            if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
            if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_siguiente_empresasPendientes(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    // pagina_actual++;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";

    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);


    if (pagina_actual==1)
    {
        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";
    }
    else{
        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }


    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            let id = arreglo_rutas[inicio].id
            let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
            let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
            let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
            let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
            let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
            let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
            let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
            let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
            let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
            let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
            let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
            let activo  = arreglo_rutas[inicio].activo
            let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

            let cadena_id = "id_"+id
            fila.setAttribute("id",id)

            let columna_id = document.createElement("td")
            columna_id.setAttribute("class","texto")
            columna_id.innerHTML = id
            fila.appendChild(columna_id)

            let columna_rfcEmpresa = document.createElement("td")
            columna_rfcEmpresa.setAttribute("class","texto")
            columna_rfcEmpresa.innerHTML = rfcEmpresa
            fila.appendChild(columna_rfcEmpresa)

            let columna_nombreEmpresa = document.createElement("td")
            columna_nombreEmpresa.setAttribute("class","texto")
            columna_nombreEmpresa.innerHTML = nombreEmpresa
            fila.appendChild(columna_nombreEmpresa)

            let columna_razonsocialEmpresa = document.createElement("td")
            columna_razonsocialEmpresa.setAttribute("class","texto")
            columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
            fila.appendChild(columna_razonsocialEmpresa)

            let columna_domicilioEmpresa = document.createElement("td")
            columna_domicilioEmpresa.setAttribute("class","texto")
            columna_domicilioEmpresa.innerHTML = domicilioEmpresa
            fila.appendChild(columna_domicilioEmpresa)

            let columna_numerocalleEmpresa = document.createElement("td")
            columna_numerocalleEmpresa.setAttribute("class","texto")
            columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
            fila.appendChild(columna_numerocalleEmpresa)

            let columna_coloniaEmpresa = document.createElement("td")
            columna_coloniaEmpresa.setAttribute("class","texto")
            columna_coloniaEmpresa.innerHTML = coloniaEmpresa
            fila.appendChild(columna_coloniaEmpresa)

            let columna_cpEmpresa = document.createElement("td")
            columna_cpEmpresa.setAttribute("class","texto")
            columna_cpEmpresa.innerHTML = cpEmpresa
            fila.appendChild(columna_cpEmpresa)

            let columna_municipioEmpresa = document.createElement("td")
            columna_municipioEmpresa.setAttribute("class","texto")
            columna_municipioEmpresa.innerHTML = municipioEmpresa
            fila.appendChild(columna_municipioEmpresa)

            let columna_estadoEmpresa = document.createElement("td")
            columna_estadoEmpresa.setAttribute("class","texto")
            columna_estadoEmpresa.innerHTML = estadoEmpresa
            fila.appendChild(columna_estadoEmpresa)

            let columna_telefonoEmpresa = document.createElement("td")
            columna_telefonoEmpresa.setAttribute("class","texto")
            columna_telefonoEmpresa.innerHTML = telefonoEmpresa
            fila.appendChild(columna_telefonoEmpresa)


            let columna_correoEmpresa = document.createElement("td")
            columna_correoEmpresa.setAttribute("class","texto")
            columna_correoEmpresa.innerHTML = correoEmpresa
            fila.appendChild(columna_correoEmpresa)

            let columna_activo = document.createElement("td")
            columna_activo.setAttribute("class","texto")
            columna_activo.innerHTML = activo
            fila.appendChild(columna_activo)

            let columna_tipo_usuario = document.createElement("td")
            columna_tipo_usuario.setAttribute("class","texto")
            columna_tipo_usuario.innerHTML = tipo_usuario
            fila.appendChild(columna_tipo_usuario)

            let columna_editar = document.createElement("td")
            let imagen_editar = document.createElement("img")
            imagen_editar.setAttribute("src","../recursos/img/alta.png")
            imagen_editar.setAttribute("class","img_accion")
            imagen_editar.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar)

            let imagen_editar2 = document.createElement("img")
            imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
            imagen_editar2.setAttribute("class","img_accion")
            imagen_editar2.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar2)
            fila.appendChild(columna_editar)
            cuerpo_paginador.appendChild(fila) 
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }

    // cuerpo_paginador.innerHTML=cuerpo;
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
    
}
function paginador_anterior_empresasPendientes(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador)
{
// pagina_actual--;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

        let cadena_id = "id_"+id
        fila.setAttribute("id",id)

        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)

        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)

        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)

        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)

        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)

        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)

        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)

        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)

        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)

        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)

        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)


        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)

        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)

        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)

        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/alta.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar)

        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}

// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_primera_empresasPendientes(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    cuerpo_paginador.innerHTML = "";
    var cuerpo = "";
    pagina_actual=1;
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
        
            let fila = document.createElement("tr")
        
        let cadena_id = "id_"+id
        fila.setAttribute("id",id)
        
        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)
        
        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)
        
        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)
        
        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)
        
        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)
        
        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)
        
        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)
        
        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)
        
        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)
        
        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)
        
        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)
        
        
        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)
        
        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)
        
        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)
        
        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/alta.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar)
        
        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 
        
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_ultima_empresasPendientes(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    var cuerpo = "";
    cuerpo_paginador.innerHTML="";
    var tamano = arreglo_rutas.length;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual=numero_paginas;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;


    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
    // arreglos
    let id = arreglo_rutas[inicio].id
    let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
    let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
    let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
    let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
    let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
    let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
    let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
    let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
    let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
    let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
    let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_rfcEmpresa = document.createElement("td")
    columna_rfcEmpresa.setAttribute("class","texto")
    columna_rfcEmpresa.innerHTML = rfcEmpresa
    fila.appendChild(columna_rfcEmpresa)

    let columna_nombreEmpresa = document.createElement("td")
    columna_nombreEmpresa.setAttribute("class","texto")
    columna_nombreEmpresa.innerHTML = nombreEmpresa
    fila.appendChild(columna_nombreEmpresa)

    let columna_razonsocialEmpresa = document.createElement("td")
    columna_razonsocialEmpresa.setAttribute("class","texto")
    columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
    fila.appendChild(columna_razonsocialEmpresa)

    let columna_domicilioEmpresa = document.createElement("td")
    columna_domicilioEmpresa.setAttribute("class","texto")
    columna_domicilioEmpresa.innerHTML = domicilioEmpresa
    fila.appendChild(columna_domicilioEmpresa)

    let columna_numerocalleEmpresa = document.createElement("td")
    columna_numerocalleEmpresa.setAttribute("class","texto")
    columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
    fila.appendChild(columna_numerocalleEmpresa)

    let columna_coloniaEmpresa = document.createElement("td")
    columna_coloniaEmpresa.setAttribute("class","texto")
    columna_coloniaEmpresa.innerHTML = coloniaEmpresa
    fila.appendChild(columna_coloniaEmpresa)

    let columna_cpEmpresa = document.createElement("td")
    columna_cpEmpresa.setAttribute("class","texto")
    columna_cpEmpresa.innerHTML = cpEmpresa
    fila.appendChild(columna_cpEmpresa)

    let columna_municipioEmpresa = document.createElement("td")
    columna_municipioEmpresa.setAttribute("class","texto")
    columna_municipioEmpresa.innerHTML = municipioEmpresa
    fila.appendChild(columna_municipioEmpresa)

    let columna_estadoEmpresa = document.createElement("td")
    columna_estadoEmpresa.setAttribute("class","texto")
    columna_estadoEmpresa.innerHTML = estadoEmpresa
    fila.appendChild(columna_estadoEmpresa)

    let columna_telefonoEmpresa = document.createElement("td")
    columna_telefonoEmpresa.setAttribute("class","texto")
    columna_telefonoEmpresa.innerHTML = telefonoEmpresa
    fila.appendChild(columna_telefonoEmpresa)


    let columna_correoEmpresa = document.createElement("td")
    columna_correoEmpresa.setAttribute("class","texto")
    columna_correoEmpresa.innerHTML = correoEmpresa
    fila.appendChild(columna_correoEmpresa)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
    imagen_editar.setAttribute("src","../recursos/img/alta.png")
    imagen_editar.setAttribute("class","img_accion")
    imagen_editar.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar)

    let imagen_editar2 = document.createElement("img")
    imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
    imagen_editar2.setAttribute("class","img_accion")
    imagen_editar2.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}


var datos_empresasPendientesDash
var boton_primeroEmpresasPendientesDash = document.getElementById("boton_paginador_primeroEmpresasPendientesDash")
var boton_anteriorEmpresasPendientesDash = document.getElementById("boton_paginador_anteriorEmpresasPendientesDash")
var boton_siguienteEmpresasPendientesDash = document.getElementById("boton_paginador_siguienteEmpresasPendientesDash")
var boton_ultimoEmpresasPendientesDash = document.getElementById("boton_paginador_ultimoEmpresasPendientesDash")
var cuerpoEmpresasPendientesDash= document.getElementById("tabla_peticion_dashboard")
var indicador_paginaEmpresasPendientesDash = document.getElementById("boton_paginador_cantidadEmpresasPendientesDash")
var cantidad_vistasEmpresasPendientesDash = document.getElementById("cantidad_peticiones_dashboard").value
var pagina_actual_empresas_PendientesDash = 1

function tomar_datos_empresas_peticion_dashboard()
{
    let contenedor = document.getElementById("tabla_peticion_dashboard")

    contenedor.innerHTML = ""
    let ajax = new XMLHttpRequest()
       ajax.open("POST","../controlador/tomar_empresas_pendientes.php")
       ajax.send()
       ajax.onreadystatechange =function () 
       {
            if (ajax.readyState == 4) 
            {
                if (ajax.status == 200) 
                {
                    // console.log("200 Respuesta Exitosa");
                    //console.log(ajax.responseText)
                    datos_empresasPendientesDash = JSON.parse(ajax.responseText)
                    // console.log(datos)
                    paginador_empresasPendientesDash(datos_empresasPendientesDash,pagina_actual_empresas_PendientesDash,cantidad_vistasEmpresasPendientesDash,boton_anteriorEmpresasPendientesDash,boton_siguienteEmpresasPendientesDash,boton_primeroEmpresasPendientesDash,boton_ultimoEmpresasPendientesDash,cuerpoEmpresasPendientesDash,indicador_paginaEmpresasPendientesDash)

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

// agregar evento a botones de paginacion

boton_siguienteEmpresasPendientesDash.addEventListener("click", function(){
    pagina_actual_empresas_PendientesDash++
    paginador_siguiente_empresasPendientesDash(datos_empresasPendientesDash,pagina_actual_empresas_PendientesDash,cantidad_vistasEmpresasPendientesDash,boton_anteriorEmpresasPendientesDash,boton_siguienteEmpresasPendientesDash,boton_primeroEmpresasPendientesDash,boton_ultimoEmpresasPendientesDash,cuerpoEmpresasPendientesDash,indicador_paginaEmpresasPendientesDash)
})

boton_anteriorEmpresasPendientesDash.addEventListener("click", function(){
    pagina_actual_empresas_PendientesDash--
    paginador_anterior_empresasPendientesDash(datos_empresasPendientesDash,pagina_actual_empresas_PendientesDash,cantidad_vistasEmpresasPendientesDash,boton_anteriorEmpresasPendientesDash,boton_siguienteEmpresasPendientesDash,boton_primeroEmpresasPendientesDash,boton_ultimoEmpresasPendientesDash,cuerpoEmpresasPendientesDash,indicador_paginaEmpresasPendientesDash)
})

boton_primeroEmpresasPendientesDash.addEventListener("click", function(){
    pagina_actual_empresas_PendientesDash = 1 
    paginador_primera_empresasPendientesDash(datos_empresasPendientesDash,pagina_actual_empresas_PendientesDash,cantidad_vistasEmpresasPendientesDash,boton_anteriorEmpresasPendientesDash,boton_siguienteEmpresasPendientesDash,boton_primeroEmpresasPendientesDash,boton_ultimoEmpresasPendientesDash,cuerpoEmpresasPendientesDash,indicador_paginaEmpresasPendientesDash)
})

boton_ultimoEmpresasPendientesDash.addEventListener("click", function(){

    var tamano = datos_empresasPendientesDash.length;
    var numero_paginas=tamano/cantidad_vistasEmpresasPendientesDash;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual_empresas_PendientesDash = numero_paginas
    paginador_ultima_empresasPendientesDash(datos_empresasPendientesDash,pagina_actual_empresas_PendientesDash,cantidad_vistasEmpresasPendientesDash,boton_anteriorEmpresasPendientesDash,boton_siguienteEmpresasPendientesDash,boton_primeroEmpresasPendientesDash,boton_ultimoEmpresasPendientesDash,cuerpoEmpresasPendientesDash,indicador_paginaEmpresasPendientesDash)
})

function paginador_empresasPendientesDash(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (numero_paginas==0) 
    {
        numero_paginas=1;
    }
    if (pagina_actual==1)
    {

        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";

    }
    else
    {

        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
        
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;

    
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            if(arreglo_rutas[inicio]=="error 400")
            {
                cuerpo_paginador.innerHTML='<tr><td style="text-align: center;" colspan="13">NO HAY DATOS</td></tr>'
            }
            else
            {

                //crear columnas por cada json con arreglo_rutas[inicio]
                       
                let id = arreglo_rutas[inicio].id
                let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
                let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
                let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
                let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
                let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
                let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
                let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
                let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
                let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
                let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
                let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
                let activo  = arreglo_rutas[inicio].activo
                let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
                
                    let fila = document.createElement("tr")
                
                let cadena_id = "id_"+id
                fila.setAttribute("id",id)
                
                let columna_id = document.createElement("td")
                columna_id.setAttribute("class","texto")
                columna_id.innerHTML = id
                fila.appendChild(columna_id)
                
                let columna_rfcEmpresa = document.createElement("td")
                columna_rfcEmpresa.setAttribute("class","texto")
                columna_rfcEmpresa.innerHTML = rfcEmpresa
                fila.appendChild(columna_rfcEmpresa)
                
                let columna_nombreEmpresa = document.createElement("td")
                columna_nombreEmpresa.setAttribute("class","texto")
                columna_nombreEmpresa.innerHTML = nombreEmpresa
                fila.appendChild(columna_nombreEmpresa)
                
                let columna_razonsocialEmpresa = document.createElement("td")
                columna_razonsocialEmpresa.setAttribute("class","texto")
                columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
                fila.appendChild(columna_razonsocialEmpresa)
                
                let columna_domicilioEmpresa = document.createElement("td")
                columna_domicilioEmpresa.setAttribute("class","texto")
                columna_domicilioEmpresa.innerHTML = domicilioEmpresa
                fila.appendChild(columna_domicilioEmpresa)
                
                let columna_numerocalleEmpresa = document.createElement("td")
                columna_numerocalleEmpresa.setAttribute("class","texto")
                columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
                fila.appendChild(columna_numerocalleEmpresa)
                
                let columna_coloniaEmpresa = document.createElement("td")
                columna_coloniaEmpresa.setAttribute("class","texto")
                columna_coloniaEmpresa.innerHTML = coloniaEmpresa
                fila.appendChild(columna_coloniaEmpresa)
                
                let columna_cpEmpresa = document.createElement("td")
                columna_cpEmpresa.setAttribute("class","texto")
                columna_cpEmpresa.innerHTML = cpEmpresa
                fila.appendChild(columna_cpEmpresa)
                
                let columna_municipioEmpresa = document.createElement("td")
                columna_municipioEmpresa.setAttribute("class","texto")
                columna_municipioEmpresa.innerHTML = municipioEmpresa
                fila.appendChild(columna_municipioEmpresa)
                
                let columna_estadoEmpresa = document.createElement("td")
                columna_estadoEmpresa.setAttribute("class","texto")
                columna_estadoEmpresa.innerHTML = estadoEmpresa
                fila.appendChild(columna_estadoEmpresa)
                
                let columna_telefonoEmpresa = document.createElement("td")
                columna_telefonoEmpresa.setAttribute("class","texto")
                columna_telefonoEmpresa.innerHTML = telefonoEmpresa
                fila.appendChild(columna_telefonoEmpresa)
                
                
                let columna_correoEmpresa = document.createElement("td")
                columna_correoEmpresa.setAttribute("class","texto")
                columna_correoEmpresa.innerHTML = correoEmpresa
                fila.appendChild(columna_correoEmpresa)
                
                let columna_activo = document.createElement("td")
                columna_activo.setAttribute("class","texto")
                columna_activo.innerHTML = activo
                fila.appendChild(columna_activo)
                
                let columna_tipo_usuario = document.createElement("td")
                columna_tipo_usuario.setAttribute("class","texto")
                columna_tipo_usuario.innerHTML = tipo_usuario
                fila.appendChild(columna_tipo_usuario)
                
                let columna_editar = document.createElement("td")
                let imagen_editar = document.createElement("img")
                imagen_editar.setAttribute("src","../recursos/img/alta.png")
                imagen_editar.setAttribute("class","img_accion")
                imagen_editar.setAttribute("onclick","activar_empleado(event);")
                columna_editar.appendChild(imagen_editar)
                
                let imagen_editar2 = document.createElement("img")
                imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
                imagen_editar2.setAttribute("class","img_accion")
                imagen_editar2.setAttribute("onclick","activar_empleado(event);")
                columna_editar.appendChild(imagen_editar2)
                fila.appendChild(columna_editar)
                cuerpo_paginador.appendChild(fila) 
            }	
            // console.log(arreglo_rutas[inicio]);
            var paso = true;
            if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
            if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_siguiente_empresasPendientesDash(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    // pagina_actual++;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";

    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);


    if (pagina_actual==1)
    {
        btn_atras.style="visibility:hidden;";
        btn_primera.style="visibility:hidden;";
    }
    else{
        btn_atras.style="visibility:visible;";
        btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
        btn_adelante.style="visibility:hidden;";
        btn_ultima.style="visibility:hidden;";
    }
    else{
        btn_adelante.style="visibility:visible;";
        btn_ultima.style="visibility:visible;";
    }


    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
        if (arreglo_rutas[inicio]!=undefined) 
        {
            let id = arreglo_rutas[inicio].id
            let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
            let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
            let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
            let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
            let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
            let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
            let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
            let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
            let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
            let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
            let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
            let activo  = arreglo_rutas[inicio].activo
            let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

            let cadena_id = "id_"+id
            fila.setAttribute("id",id)

            let columna_id = document.createElement("td")
            columna_id.setAttribute("class","texto")
            columna_id.innerHTML = id
            fila.appendChild(columna_id)

            let columna_rfcEmpresa = document.createElement("td")
            columna_rfcEmpresa.setAttribute("class","texto")
            columna_rfcEmpresa.innerHTML = rfcEmpresa
            fila.appendChild(columna_rfcEmpresa)

            let columna_nombreEmpresa = document.createElement("td")
            columna_nombreEmpresa.setAttribute("class","texto")
            columna_nombreEmpresa.innerHTML = nombreEmpresa
            fila.appendChild(columna_nombreEmpresa)

            let columna_razonsocialEmpresa = document.createElement("td")
            columna_razonsocialEmpresa.setAttribute("class","texto")
            columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
            fila.appendChild(columna_razonsocialEmpresa)

            let columna_domicilioEmpresa = document.createElement("td")
            columna_domicilioEmpresa.setAttribute("class","texto")
            columna_domicilioEmpresa.innerHTML = domicilioEmpresa
            fila.appendChild(columna_domicilioEmpresa)

            let columna_numerocalleEmpresa = document.createElement("td")
            columna_numerocalleEmpresa.setAttribute("class","texto")
            columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
            fila.appendChild(columna_numerocalleEmpresa)

            let columna_coloniaEmpresa = document.createElement("td")
            columna_coloniaEmpresa.setAttribute("class","texto")
            columna_coloniaEmpresa.innerHTML = coloniaEmpresa
            fila.appendChild(columna_coloniaEmpresa)

            let columna_cpEmpresa = document.createElement("td")
            columna_cpEmpresa.setAttribute("class","texto")
            columna_cpEmpresa.innerHTML = cpEmpresa
            fila.appendChild(columna_cpEmpresa)

            let columna_municipioEmpresa = document.createElement("td")
            columna_municipioEmpresa.setAttribute("class","texto")
            columna_municipioEmpresa.innerHTML = municipioEmpresa
            fila.appendChild(columna_municipioEmpresa)

            let columna_estadoEmpresa = document.createElement("td")
            columna_estadoEmpresa.setAttribute("class","texto")
            columna_estadoEmpresa.innerHTML = estadoEmpresa
            fila.appendChild(columna_estadoEmpresa)

            let columna_telefonoEmpresa = document.createElement("td")
            columna_telefonoEmpresa.setAttribute("class","texto")
            columna_telefonoEmpresa.innerHTML = telefonoEmpresa
            fila.appendChild(columna_telefonoEmpresa)


            let columna_correoEmpresa = document.createElement("td")
            columna_correoEmpresa.setAttribute("class","texto")
            columna_correoEmpresa.innerHTML = correoEmpresa
            fila.appendChild(columna_correoEmpresa)

            let columna_activo = document.createElement("td")
            columna_activo.setAttribute("class","texto")
            columna_activo.innerHTML = activo
            fila.appendChild(columna_activo)

            let columna_tipo_usuario = document.createElement("td")
            columna_tipo_usuario.setAttribute("class","texto")
            columna_tipo_usuario.innerHTML = tipo_usuario
            fila.appendChild(columna_tipo_usuario)

            let columna_editar = document.createElement("td")
            let imagen_editar = document.createElement("img")
            imagen_editar.setAttribute("src","../recursos/img/alta.png")
            imagen_editar.setAttribute("class","img_accion")
            imagen_editar.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar)

            let imagen_editar2 = document.createElement("img")
            imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
            imagen_editar2.setAttribute("class","img_accion")
            imagen_editar2.setAttribute("onclick","activar_empleado(event);")
            columna_editar.appendChild(imagen_editar2)
            fila.appendChild(columna_editar)
            cuerpo_paginador.appendChild(fila) 
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
        }
    }

    // cuerpo_paginador.innerHTML=cuerpo;
    pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
    
}
function paginador_anterior_empresasPendientesDash(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador)
{
// pagina_actual--;
    var cuerpo = "";
    cuerpo_paginador.innerHTML = "";
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

            let fila = document.createElement("tr")

        let cadena_id = "id_"+id
        fila.setAttribute("id",id)

        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)

        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)

        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)

        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)

        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)

        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)

        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)

        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)

        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)

        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)

        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)


        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)

        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)

        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)

        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/alta.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar)

        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}

// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_primera_empresasPendientesDash(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){

    cuerpo_paginador.innerHTML = "";
    var cuerpo = "";
    pagina_actual=1;
    var tamano = arreglo_rutas.length;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);

    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
        let id = arreglo_rutas[inicio].id
        let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
        let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
        let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
        let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
        let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
        let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
        let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
        let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
        let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
        let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
        let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
        let activo  = arreglo_rutas[inicio].activo
        let tipo_usuario = arreglo_rutas[inicio].tipo_usuario
        
            let fila = document.createElement("tr")
        
        let cadena_id = "id_"+id
        fila.setAttribute("id",id)
        
        let columna_id = document.createElement("td")
        columna_id.setAttribute("class","texto")
        columna_id.innerHTML = id
        fila.appendChild(columna_id)
        
        let columna_rfcEmpresa = document.createElement("td")
        columna_rfcEmpresa.setAttribute("class","texto")
        columna_rfcEmpresa.innerHTML = rfcEmpresa
        fila.appendChild(columna_rfcEmpresa)
        
        let columna_nombreEmpresa = document.createElement("td")
        columna_nombreEmpresa.setAttribute("class","texto")
        columna_nombreEmpresa.innerHTML = nombreEmpresa
        fila.appendChild(columna_nombreEmpresa)
        
        let columna_razonsocialEmpresa = document.createElement("td")
        columna_razonsocialEmpresa.setAttribute("class","texto")
        columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
        fila.appendChild(columna_razonsocialEmpresa)
        
        let columna_domicilioEmpresa = document.createElement("td")
        columna_domicilioEmpresa.setAttribute("class","texto")
        columna_domicilioEmpresa.innerHTML = domicilioEmpresa
        fila.appendChild(columna_domicilioEmpresa)
        
        let columna_numerocalleEmpresa = document.createElement("td")
        columna_numerocalleEmpresa.setAttribute("class","texto")
        columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
        fila.appendChild(columna_numerocalleEmpresa)
        
        let columna_coloniaEmpresa = document.createElement("td")
        columna_coloniaEmpresa.setAttribute("class","texto")
        columna_coloniaEmpresa.innerHTML = coloniaEmpresa
        fila.appendChild(columna_coloniaEmpresa)
        
        let columna_cpEmpresa = document.createElement("td")
        columna_cpEmpresa.setAttribute("class","texto")
        columna_cpEmpresa.innerHTML = cpEmpresa
        fila.appendChild(columna_cpEmpresa)
        
        let columna_municipioEmpresa = document.createElement("td")
        columna_municipioEmpresa.setAttribute("class","texto")
        columna_municipioEmpresa.innerHTML = municipioEmpresa
        fila.appendChild(columna_municipioEmpresa)
        
        let columna_estadoEmpresa = document.createElement("td")
        columna_estadoEmpresa.setAttribute("class","texto")
        columna_estadoEmpresa.innerHTML = estadoEmpresa
        fila.appendChild(columna_estadoEmpresa)
        
        let columna_telefonoEmpresa = document.createElement("td")
        columna_telefonoEmpresa.setAttribute("class","texto")
        columna_telefonoEmpresa.innerHTML = telefonoEmpresa
        fila.appendChild(columna_telefonoEmpresa)
        
        
        let columna_correoEmpresa = document.createElement("td")
        columna_correoEmpresa.setAttribute("class","texto")
        columna_correoEmpresa.innerHTML = correoEmpresa
        fila.appendChild(columna_correoEmpresa)
        
        let columna_activo = document.createElement("td")
        columna_activo.setAttribute("class","texto")
        columna_activo.innerHTML = activo
        fila.appendChild(columna_activo)
        
        let columna_tipo_usuario = document.createElement("td")
        columna_tipo_usuario.setAttribute("class","texto")
        columna_tipo_usuario.innerHTML = tipo_usuario
        fila.appendChild(columna_tipo_usuario)
        
        let columna_editar = document.createElement("td")
        let imagen_editar = document.createElement("img")
        imagen_editar.setAttribute("src","../recursos/img/alta.png")
        imagen_editar.setAttribute("class","img_accion")
        imagen_editar.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar)
        
        let imagen_editar2 = document.createElement("img")
        imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
        imagen_editar2.setAttribute("class","img_accion")
        imagen_editar2.setAttribute("onclick","activar_empleado(event);")
        columna_editar.appendChild(imagen_editar2)
        fila.appendChild(columna_editar)
        cuerpo_paginador.appendChild(fila) 
        
        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}
function paginador_ultima_empresasPendientesDash(arreglo_rutas,pagina_actual,cantidad_vistas,btn_atras,btn_adelante,btn_primera,btn_ultima,cuerpo_paginador,pagina_paginador){
    var cuerpo = "";
    cuerpo_paginador.innerHTML="";
    var tamano = arreglo_rutas.length;
    var numero_paginas=tamano/cantidad_vistas;
    numero_paginas=Math.ceil(numero_paginas);
    pagina_actual=numero_paginas;
    var inicio=pagina_actual-1;
    inicio=inicio*cantidad_vistas;
    var final=pagina_actual*cantidad_vistas;


    if (pagina_actual==1)
    {
    btn_atras.style="visibility:hidden;";
    btn_primera.style="visibility:hidden;";
    }
    else{
    btn_atras.style="visibility:visible;";
    btn_primera.style="visibility:visible;";
    }

    if (pagina_actual==numero_paginas) 
    {
    btn_adelante.style="visibility:hidden;";
    btn_ultima.style="visibility:hidden;";
    }
    else{
    btn_adelante.style="visibility:visible;";
    btn_ultima.style="visibility:visible;";
    }

    var numero_clase=1;
    for (inicio; inicio < final; inicio++) 
    {
    if (arreglo_rutas[inicio]!=undefined) 
    {
    // arreglos
    let id = arreglo_rutas[inicio].id
    let rfcEmpresa = arreglo_rutas[inicio].rfcEmpresa
    let nombreEmpresa = arreglo_rutas[inicio].nombreEmpresa
    let razonsocialEmpresa = arreglo_rutas[inicio].razonsocialEmpresa
    let domicilioEmpresa = arreglo_rutas[inicio].domicilioEmpresa
    let numerocalleEmpresa = arreglo_rutas[inicio].numerocalleEmpresa
    let coloniaEmpresa = arreglo_rutas[inicio].coloniaEmpresa
    let cpEmpresa = arreglo_rutas[inicio].cpEmpresa
    let municipioEmpresa = arreglo_rutas[inicio].municipioEmpresa
    let estadoEmpresa = arreglo_rutas[inicio].estadoEmpresa
    let telefonoEmpresa  = arreglo_rutas[inicio].telefonoEmpresa
    let correoEmpresa = arreglo_rutas[inicio].correoEmpresa
    let activo  = arreglo_rutas[inicio].activo
    let tipo_usuario = arreglo_rutas[inicio].tipo_usuario

        let fila = document.createElement("tr")

    let cadena_id = "id_"+id
    fila.setAttribute("id",id)

    let columna_id = document.createElement("td")
    columna_id.setAttribute("class","texto")
    columna_id.innerHTML = id
    fila.appendChild(columna_id)

    let columna_rfcEmpresa = document.createElement("td")
    columna_rfcEmpresa.setAttribute("class","texto")
    columna_rfcEmpresa.innerHTML = rfcEmpresa
    fila.appendChild(columna_rfcEmpresa)

    let columna_nombreEmpresa = document.createElement("td")
    columna_nombreEmpresa.setAttribute("class","texto")
    columna_nombreEmpresa.innerHTML = nombreEmpresa
    fila.appendChild(columna_nombreEmpresa)

    let columna_razonsocialEmpresa = document.createElement("td")
    columna_razonsocialEmpresa.setAttribute("class","texto")
    columna_razonsocialEmpresa.innerHTML = razonsocialEmpresa
    fila.appendChild(columna_razonsocialEmpresa)

    let columna_domicilioEmpresa = document.createElement("td")
    columna_domicilioEmpresa.setAttribute("class","texto")
    columna_domicilioEmpresa.innerHTML = domicilioEmpresa
    fila.appendChild(columna_domicilioEmpresa)

    let columna_numerocalleEmpresa = document.createElement("td")
    columna_numerocalleEmpresa.setAttribute("class","texto")
    columna_numerocalleEmpresa.innerHTML = numerocalleEmpresa
    fila.appendChild(columna_numerocalleEmpresa)

    let columna_coloniaEmpresa = document.createElement("td")
    columna_coloniaEmpresa.setAttribute("class","texto")
    columna_coloniaEmpresa.innerHTML = coloniaEmpresa
    fila.appendChild(columna_coloniaEmpresa)

    let columna_cpEmpresa = document.createElement("td")
    columna_cpEmpresa.setAttribute("class","texto")
    columna_cpEmpresa.innerHTML = cpEmpresa
    fila.appendChild(columna_cpEmpresa)

    let columna_municipioEmpresa = document.createElement("td")
    columna_municipioEmpresa.setAttribute("class","texto")
    columna_municipioEmpresa.innerHTML = municipioEmpresa
    fila.appendChild(columna_municipioEmpresa)

    let columna_estadoEmpresa = document.createElement("td")
    columna_estadoEmpresa.setAttribute("class","texto")
    columna_estadoEmpresa.innerHTML = estadoEmpresa
    fila.appendChild(columna_estadoEmpresa)

    let columna_telefonoEmpresa = document.createElement("td")
    columna_telefonoEmpresa.setAttribute("class","texto")
    columna_telefonoEmpresa.innerHTML = telefonoEmpresa
    fila.appendChild(columna_telefonoEmpresa)


    let columna_correoEmpresa = document.createElement("td")
    columna_correoEmpresa.setAttribute("class","texto")
    columna_correoEmpresa.innerHTML = correoEmpresa
    fila.appendChild(columna_correoEmpresa)

    let columna_activo = document.createElement("td")
    columna_activo.setAttribute("class","texto")
    columna_activo.innerHTML = activo
    fila.appendChild(columna_activo)

    let columna_tipo_usuario = document.createElement("td")
    columna_tipo_usuario.setAttribute("class","texto")
    columna_tipo_usuario.innerHTML = tipo_usuario
    fila.appendChild(columna_tipo_usuario)

    let columna_editar = document.createElement("td")
    let imagen_editar = document.createElement("img")
    imagen_editar.setAttribute("src","../recursos/img/alta.png")
    imagen_editar.setAttribute("class","img_accion")
    imagen_editar.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar)

    let imagen_editar2 = document.createElement("img")
    imagen_editar2.setAttribute("src","../recursos/img/eliminar.png")
    imagen_editar2.setAttribute("class","img_accion")
    imagen_editar2.setAttribute("onclick","activar_empleado(event);")
    columna_editar.appendChild(imagen_editar2)
    fila.appendChild(columna_editar)
    cuerpo_paginador.appendChild(fila) 

        var paso = true;
        if (numero_clase==1&&paso==true){numero_clase=2; paso =false;}
        if (numero_clase==2&&paso==true){numero_clase=1;}
    }
}
// cuerpo_elemento_paginador.innerHTML=cuerpo;
pagina_paginador.innerHTML= pagina_actual+" de "+numero_paginas;
}







