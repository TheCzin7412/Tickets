<?php
include_once("../modelo/acciones.php");
$sesion = $_SESSION['idSesion'];
$idUsuario = $_SESSION['idUsuario'];
$nombreEmpresa = $_SESSION['nombreEmpresa'];
$modelo = new Acciones();
$resultado = $modelo->tomarTicketsActivosEmpresa($idUsuario,$sesion,$nombreEmpresa);
echo $resultado;

?>

