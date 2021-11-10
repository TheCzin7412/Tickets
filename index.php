<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
    <link rel="stylesheet" href="recursos/css/estilos.css">
    <link rel="stylesheet" href="recursos/css/inicio_sesion.css">
    <link rel="shortcut icon" href="recursos/img/logo.ico" type="image/x-icon">

</head>
<body>
    <div id="contenedor_inicio_sesion">

        <div id="opciones_inicio_sesion">
            <div id="c_boton_login" class="opciones_login" onclick="mostrarSeccionLogin(event);">
                <p id="parrafo_login" class="parrafo_contador">Iniciar Sesion</p>
            </div>
            <div id="c_boton_inicioSesion_registrar" class="opciones_login" onclick="mostrarSeccionLogin(event);">
                <p id="parrafo_inicioSesion_registrar" class="parrafo_contador">Registrar Empresa</p>
            </div>
        </div>

        <div class="seccion_login" id="contenedor_formulario_login" >
            <h1 class="titulo">
                Inicio Sesion
            </h1>
            <input id="input_correo" type="text" class="input_text" placeholder="Correo" value="">
            <input id="input_contra" type="password" class="input_text"  placeholder="Contrasena">
            <button class="boton" id="boton_inicio" onclick="inicio_sesion();">Iniciar</button>
        </div>

        <div class="seccion_login" id="contenedor_formulario_registrar" >
        <h1 class="titulo">
                Registrar Petion Para Nueva Empresa
            </h1>
            <div class="formulario_registro_inicio_sesion">
                <input id="input_rfcEmpresa" type="text" class="input_text" placeholder="RFC" value="">
                <input id="input_nombreEmpresa" type="text" class="input_text"  placeholder="Nombre Empresa">
            </div>
            <div class="formulario_registro_inicio_sesion">
                <input id="input_razonsocialEmpresa" type="text" class="input_text" placeholder="Razon Social" value="">
                <input id="input_domicilioEmpresa" type="text" class="input_text"  placeholder="Domicilio">
            </div>
            <div class="formulario_registro_inicio_sesion">
                <input id="input_numerocalleEmpresa" type="text" class="input_text" placeholder="N° Ext Calle" value="">
                <input id="input_coloniaEmpresa" type="text" class="input_text"  placeholder="Colonia">
            </div>
            <div class="formulario_registro_inicio_sesion">
                <input id="input_cpEmpresa" type="text" class="input_text" placeholder="Codigo Postal" value="">
                <input id="input_municipioEmpresa" type="text" class="input_text"  placeholder="Municipio">
            </div>
            <div class="formulario_registro_inicio_sesion">
                <input id="input_estadoEmpresa" type="text" class="input_text" placeholder="Estado" value="">
                <input id="input_telefonoEmpresa" type="text" class="input_text"  placeholder="Telefono">
            </div>
            <div class="formulario_registro_inicio_sesion">
                <input id="input_correoEmpresa" type="text" class="input_text" placeholder="Correo" value="">
                <input id="input_contrasenaEmpresa" type="password" class="input_text"  placeholder="Contraseña ">
            </div>
            <div>
                <button class="boton" id="boton_registro_iniciosesion" onclick="agregar_peticion_empresa();">Dar de alta la peticion</button>
            </div>
        </div>

    </div>
    <script src="recursos/js/funcionesInicio.js"></script>
</body>
</html>