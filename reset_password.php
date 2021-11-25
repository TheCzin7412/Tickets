<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar contrasena</title>
    <link rel="stylesheet" href="recursos/css/estilos.css" type="text/css">
</head>
<body>
    <div id="contenedor_formulario_cambio_contrasena">
        <h1>Cambio de contraseña</h1>
        <!-- <div class="cambio_contrasena">
            <p>Ingrese la contrasena actual</p>
            <input type="password" id="input_contrasena_actual" class="input_cambio_contrasena" placeholder="Contraseña actual">
        </div> -->
        <div class="cambio_contrasena">
            <p>Ingrese la nueva contrasena</p>
            <input type="password" id="input_contrasena_nueva" class="input_cambio_contrasena" placeholder="Nueva contraseña">
        </div>
        <div class="cambio_contrasena">
            <p>Confirme la contraseña</p>
            <input type="password" id="input_confirmacion_contrasena" class="input_cambio_contrasena" placeholder="Confirme la nueva contraseña">
        </div>
        <div class="cambio_contrasena">
            <button class="boton" onclick="cambiar_contrasena();">Cambiar contraseña</button>
        </div>
    </div>
    <script>
        function cambiar_contrasena()
        {
            var contrasena_nueva = document.getElementById("input_contrasena_nueva").value.trim();
            var contrasena_nueva2 = document.getElementById("input_confirmacion_contrasena").value.trim();
            // alert(contrasena_nueva)
            if(contrasena_nueva == contrasena_nueva2)
            {
            let peticion = new XMLHttpRequest();
            peticion.open('POST', 'controlador/reset_contrasena.php', true);
            peticion.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            peticion.onload = function()
            {
                if(peticion.status == 200)
                {
                    let respuesta = peticion.responseText;
                    console.log(respuesta);
                    if(respuesta == 'se cambio correctamente')
                    {
                        alert(respuesta);
                        // window.location.href = 'index.php';
                    }
                    else
                    {
                        alert(respuesta);
                    }
                }
                else
                {
                    alert('Error ' + peticion.status);
                }

            }
            peticion.send('contrasena_nueva=' + contrasena_nueva);
            }
            else
            {
                alert("Las contraseñas no coinciden");
            }
        }
    </script>
</body>
</html>