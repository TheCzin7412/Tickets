<?php
include_once ('../modelo/acciones.php');
include_once ('FPDF/fpdf.php');
$texto = "EJEMPLO";

$pdf = new FPDF('P','mm',array(215.9,279.4));   
$pdf->AddPage();
$pdf->Image("../recursos/img/pdf/formato_prueba.png",0,0,215.9,279.4,'PNG');
// estilos de textos
$pdf->SetFont('Arial','B',7.5);
// posiciones de textos

//No ticket 
$pdf->Text(26.5,54.7,$texto);

// No Folio
$pdf->Text(69.6,54.7,$texto);

//Fecha Alta
$pdf->Text(155,54.8,$texto);

//Fecha cierre
$pdf->Text(157.2,62.5,$texto);

//Empresa
$pdf->Text(24.5,59.6,$texto);

//razon social
$pdf->Text(30.7,64.6,$texto);

// Domiciolio
$pdf->Text(25.7,69.8,$texto);

//numero exterior
$pdf->Text(21.5,74.6,$texto);

//Colonia
$pdf->Text(23,79.7,$texto);

//telefono
$pdf->Text(24,84.6,$texto);

//correo
$pdf->Text(39,89.7,$texto);

// Tipo servicio
$pdf->Text(36.5,98.4,$texto);

//prioridad
$pdf->Text(124.5,98.4,$texto);


//problematica 
$pdf->Text(48,105.8,$texto);

//comentarios
$pdf->Text(7.2,124,$texto);

//firma empresa
$pdf->Text(53,217,$texto);

//firma empleado
$pdf->Text(150,217,$texto);



// $pdf->AddPage();
// $pdf->Image("../recursos/img/pdf/formato_fondo.png",0,0,215.9,279.4,'PNG');

$pdf->Output('I',"../pdf/ejemplo2.pdf",true);

?>