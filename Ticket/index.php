<?php
include_once("../modelo/acciones.php");
if(isset($_GET['info']))
{
    $idUsuario = $_SESSION['idUsuario'];
    $idSesion = $_SESSION['idSesion'];
    $tipo = $_SESSION['tipoUsuario'];
    $id_informacion = $_GET['info'];
    $modelo = new Acciones();
    $datos = $modelo->tomar_informacion_ticket($idUsuario,$idSesion,$id_informacion,$tipo); 
    $datos = $datos[0];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket</title>
    <link rel="stylesheet" href="../recursos/css/estilos.css" type="text/css">
    <link rel="stylesheet" href="../recursos/css/estilos_ticket.css" type="text/css">
    <link rel="shortcut icon" href="../recursos/img/logo.ico" type="image/x-icon">
</head>
<body>
<div id="contenedor">
    <input type="hidden" id="id_ticket" value="<?php echo $id_informacion;?>">
    <input type="hidden" id="id_nombre" value="<?php echo $_SESSION['nombreUsuario'];?>">
    <input type="hidden" id="id_tipo" value="<?php echo $_SESSION['tipoUsuario'];?>">
    <div class="contenedor_menu">
       <p class="boton_menu">Descargar Reporte</p>
       <p class="boton_menu">Cerrar</p>
       <table id="tabla_estado">
           <tr>
               <td>Estado</td>
           </tr>
           <tr>
               <td><?php echo $datos['estatus']?></td>
           </tr>
       </table>
    </div>
    <div class="contenedor_informacion">
            <div class="contenedor_titulo">
                <h1>Informacion ticket</h1>
            </div>
            <div class="contenedor_division">
                <div class="lados_contenedor">
                    <div class="contenedor_info_item">
                        <div class="info_item">
                            <p class="titulo_item"><strong>Nombre Empresa</strong></p>
                            <p class="text_item"><?php echo $datos['nombreEmpresa'];?></p>
                        </div>
                        <div class="info_item">
                            <p class="titulo_item"><strong>RFC Empresa</strong></p>
                            <p class="text_item"><?php echo $datos['rfcEmpresa'];?></p>
                        </div>
                </div>
                <div class="contenedor_info_item">
                        <div class="info_item">
                            <p class="titulo_item"><strong>Fecha y hora</strong></p>
                            <p class="text_item"><?php echo $datos['fechaRegistro']." ".$datos['horaRegistro'];?></p>
                        </div>
                        <div class="info_item">
                            <p class="titulo_item"><strong>Tipo Servicio</strong></p>
                            <p class="text_item"><?php echo $datos['tipoServicio'];?></p>
                        </div>
                        <div class="info_item">
                            <p class="titulo_item"><strong>Prioridad Servicio</strong></p>
                            <p class="text_item"><?php echo $datos['prioridad'];?></p>
                        </div>
                </div>
                <div class="contenedor_info_item">
                        <div class="info_item">
                            <p class="titulo_item"><strong>Descripcion del problema</strong></p>
                            <p class="text_item"><?php echo $datos['descripcion'];?></p>
                        </div>
                </div>
                </div>
                <div class="lados_contenedor">
                    <div class="contenedor_info_item">
                            <div class="info_item">
                                <p class="titulo_item"><strong> Comentarios</strong></p>
                                <!-- <p class="text_item">Comentario - Admin - 21.12.21</p> -->
                                <table>
                                    <tr>
                                        <?php echo $datos['comentarios'];?>
                                    </tr>
                                </table>
                            </div>
                    </div>
                    <div class="contenedor_info_item">
                            <div class="info_item">
                                <p class="titulo_item"><strong> Crear Comentario</strong></p>
                                <textarea name="" id="textarea_comentario" cols="30" rows="10"></textarea>
                                <buttom class="boton" onclick="agregar_comentario();">Comentar</buttom>
                            </div>
                    </div>

                </div>
            </div>
    </div>
</div><script src="../recursos/js/funcionesTickets.js"></script>
</body>
</html>