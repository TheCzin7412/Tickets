<?php
include_once("../modelo/acciones.php");
$sesion = $_SESSION['idSesion'];
$idUsuario = $_SESSION['idUsuario'];
$nombreEmpresa = $_SESSION['nombreEmpresa'];
$modelo = new Acciones();
$resultado = $modelo->tomarTicketsResueltoEmpresa($idUsuario,$sesion,$nombreEmpresa);
echo $resultado;

?> 
