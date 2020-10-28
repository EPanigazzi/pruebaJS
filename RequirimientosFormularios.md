# Requerimientos

# Pagina detalle de enfermedades

<p>Al presionar el botón enviar los campos se deben validar:<p>
<ul>
    <li>
        Validar los siguientes campos como obligatorios Nombre y Apellido, Dni, Teléfono y
        preguntas sobre síntomas.
    </li>
    <li>
        En el caso de que se seleccione en la opción ¿Has viajado al exterior de la República
        Argentina?
    </li>
    <ul>
        <li>Sí, mostrar el campo países visitados.</li>
        <li>Al seleccionar no, ocultarlo.</li> 
    </ul>
    <li>En el caso de que seleccione en la opción ¿Tuviste Dificultad para respirar?</li>
    <ul>
        <li>Sí, mostrar campo de dirección.</li>
        <li>Al seleccionar no, ocultarlo.</li> 
    </ul>
    <li>
        Al enviar el formulario y completar todos los campos correctamente, mostrar el mensaje “El
        formulario fue completado correctamente. X síntomas de COVID-19 fueron registrados”.
        Siendo x la cantidad de síntomas completados como positivos.
    </li>
</ul>
<br>


# Pagina contacto

<p>Al presionar el botón enviar los campos se deben validar:<p>
<ul>
    <li>Nombre y apellido no puede estar vacío.</li>
    <li>El email deberá ser validado con una expresión regular.</li>
    <li>Teléfono se debe validar el formato de 8 dígitos e incluir un guion medio
entre el cuarto y quinto número en caso de que el usuario lo ingrese, si no lo
ingresa no se deben realizar validaciones.</li>
    <li>Consulta, se debe limitar a 1000 caracteres y mostrar la cantidad de
caracteres restantes en tiempo real.</li>
</ul>
