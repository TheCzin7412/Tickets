<?php
include_once("../modelo/acciones.php");


$nombreEmpresa = $_POST['nombreEmpresa'];
$rfcEmpresa = $_POST['rfcEmpresa'];
$fechaRegistro = $_POST['fechaRegistro'];
$tipoServicio = $_POST['tipoServicio'];
$prioridad = $_POST['prioridad'];
$descripcion = $_POST['descripcion'];


$modelo = new Acciones();
$registrar_ticket= $modelo->agregar_ticket($nombreEmpresa,$rfcEmpresa,$fechaRegistro,$tipoServicio,$prioridad,$descripcion);
echo $registrar_ticket;

?>