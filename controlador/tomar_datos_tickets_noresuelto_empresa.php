<?php
include_once("../modelo/acciones.php");
$sesion = $_SESSION['idSesion'];
$idUsuario = $_SESSION['idUsuario'];
$nombreEmpresa = $_SESSION['nombreEmpresa'];
$modelo = new Acciones();
$resultado = $modelo->tomarTicketsNoResueltoEmpresa($idUsuario,$sesion,$nombreEmpresa);
echo $resultado;

?>
 