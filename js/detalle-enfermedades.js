const validarFormularioDetEnfermedades = () => {
    const nombreApellido = validarNombreApellido();
    const DNI = validarDNI();
    const telefono = validarTelefono();
    const fiebre = validarPreguntaFiebre();
    const dolorCabeza = validarPreguntaDolorCabeza();
    const tos = validarPreguntaTos();
    const dolorGarganta = validarPreguntaDolorGarganta();
    const respirar = validarPreguntaRespirar();

    const cantidadDeSintomasPositivos = calcularCantidadDeSintomasPositivos(
        fiebre,
        dolorCabeza,
        tos,
        dolorGarganta,
        respirar
    );

    const mensaje = `El fomulario fue completado correctamente. ${cantidadDeSintomasPositivos} sintomas de COVID-19 fueron registrados`;

    if (nombreApellido && DNI && telefono)
        if (
            fiebre !== -1 &&
            dolorCabeza !== -1 &&
            tos !== -1 &&
            dolorGarganta !== -1 &&
            respirar !== -1
        ) {
            document.querySelector(".mensajeEnvio").classList.remove("ocultar");
            document.querySelector(".mensajeEnvio p").innerHTML = mensaje
        }

    return false;
};

const validarNombreApellido = () => {
    const nombreApellido = document.querySelector("#name");
    const mensaje = "Campo obligatorio";

    if (!nombreApellido.value) {
        nombreApellido.className = "errorInput";
        document.querySelector("#errorNombreApellido").innerHTML = mensaje;
        return false;
    }
    nombreApellido.className = "input-100";
    nombreApellido.classList.remove("errorInput");
    document.querySelector("#errorNombreApellido").innerHTML = "";
    return true;
};

const validarDNI = () => {
    const nroDNI = document.querySelector("#dni").value;
    const regexDNI = /^[0-9]{8}$/;
    const mensaje = "Campo obligatorio";

    if (!regexDNI.test(nroDNI)) {
        document.querySelector("#dni").className= "errorInput";
        document.querySelector("#errorDNI").innerHTML = mensaje;
        return false;
    }
    document.querySelector("#dni").classList.remove("errorInput");
    document.querySelector("#dni").className = "input-100";
    document.querySelector("#errorDNI").innerHTML = "";
    return true;
};

const validarTelefono = () => {
    const nroTelefono = document.querySelector("#telefono").value;
    const regexTelefono = /^\(?\d{3}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
    const mensaje = "Debe ser XX-XXXX-XXXX";

    if (!regexTelefono.test(nroTelefono)) {
        document.querySelector("#telefono").className= "errorInput";
        document.querySelector("#errorTelefono").innerHTML = mensaje;
        return false;
    }
    document.querySelector("#telefono").classList.remove("errorInput");
    document.querySelector("#telefono").className = "input-100";
    document.querySelector("#errorTelefono").innerHTML = "";
    return true;
};

//Pregunta de viaje al exterior

const ocultarPaisesVisitados = () => {
    const preguntaExteriorFalse = document.querySelector("#travellFalse")
        .checked;
    const opcionPaisesVisitadosLabel = document.querySelector(
        "[for = 'countryVisited']"
    );
    const opcionPaisesVisitadosInput = document.querySelector(
        "[list = 'countryVisited']"
    );

    if (preguntaExteriorFalse) {
        opcionPaisesVisitadosLabel.style.display = "none";
        opcionPaisesVisitadosInput.style.display = "none";
    }
};

const mostrarPaisesVisitados = () => {
    const preguntaExteriorTrue = document.querySelector("#travellTrue").checked;
    const opcionPaisesVisitadosLabel = document.querySelector(
        "[for = 'countryVisited']"
    );
    const opcionPaisesVisitadosInput = document.querySelector(
        "[list = 'countryVisited']"
    );

    if (preguntaExteriorTrue) {
        opcionPaisesVisitadosLabel.style.display = "block";
        opcionPaisesVisitadosInput.style.display = "block";
    }
};

//FIN -----Pregunta de viaje al exterior

//Preguntas sintomas

//Fiebre
const validarPreguntaFiebre = () => {
    const fiebreTrue = document.querySelector("#fiebreTrue").checked;
    const fiebreFalse = document.querySelector("#fiebreFalse").checked;

    if (fiebreTrue && !fiebreFalse) {
        document.querySelector("#errorCheckedFiebre").innerHTML = "";
        return 1;
    } else if (!fiebreTrue && fiebreFalse) {
        document.querySelector("#errorCheckedFiebre").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedFiebre").innerHTML =
        "Debe contestar 'Si' o 'No' ";
    return -1;
};
//Dolor cabeza
const validarPreguntaDolorCabeza = () => {
    const dolorCabezaTrue = document.querySelector("#dolorCabezaTrue").checked;
    const dolorCabezaFalse = document.querySelector("#dolorCabezaFalse")
        .checked;

    if (dolorCabezaTrue && !dolorCabezaFalse) {
        document.querySelector("#errorCheckedDolorCabeza").innerHTML = "";
        return 1;
    } else if (!dolorCabezaTrue && dolorCabezaFalse) {
        document.querySelector("#errorCheckedDolorCabeza").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedDolorCabeza").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};
//Tos
const validarPreguntaTos = () => {
    const tosTrue = document.querySelector("#tosTrue").checked;
    const tosFalse = document.querySelector("#tosFalse").checked;

    if (tosTrue && !tosFalse) {
        document.querySelector("#errorCheckedTos").innerHTML = "";
        return 1;
    } else if (!tosTrue && tosFalse) {
        document.querySelector("#errorCheckedTos").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedTos").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};
//DolorGarganta
const validarPreguntaDolorGarganta = () => {
    const dolorGargantaTrue = document.querySelector("#dolorGargantaTrue")
        .checked;
    const dolorGargantaFalse = document.querySelector("#dolorGargantaFalse")
        .checked;

    if (dolorGargantaTrue && !dolorGargantaFalse) {
        document.querySelector("#errorCheckedDolorGaraganta").innerHTML = "";
        return 1;
    } else if (!dolorGargantaTrue && dolorGargantaFalse) {
        document.querySelector("#errorCheckedDolorGaraganta").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedDolorGaraganta").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};
//Dificultad respirar
const validarPreguntaRespirar = () => {
    const dificultadRespirarTrue = document.querySelector(
        "#dificultadRespirarTrue"
    ).checked;
    const dificultadRespirarFalse = document.querySelector(
        "#dificultadRespirarFalse"
    ).checked;

    if (dificultadRespirarTrue && !dificultadRespirarFalse) {
        document.querySelector("#errorCheckedRespirar").innerHTML = "";
        return 1;
    } else if (!dificultadRespirarTrue && dificultadRespirarFalse) {
        document.querySelector("#errorCheckedRespirar").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedRespirar").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};

// mostar / ocultar direccion

const mostarDireccion = () => {
    const dificultadRespirarTrue = document.querySelector(
        "#dificultadRespirarTrue"
    ).checked;
    const direccionLabel = document.querySelector("[for = 'address']");
    const direccionInput = document.querySelector("#address");

    if (dificultadRespirarTrue) {
        direccionLabel.style.display = "block";
        direccionInput.style.display = "block";
    }
};

const ocultarDireccion = () => {
    const dificultadRespirarFalse = document.querySelector(
        "#dificultadRespirarFalse"
    ).checked;
    const direccionLabel = document.querySelector("[for = 'address']");
    const direccionInput = document.querySelector("#address");

    if (dificultadRespirarFalse) {
        direccionLabel.style.display = "none";
        direccionInput.style.display = "none";
    }
};

// mostar / ocultar direccion

// funcion para contar la cantidad de sintomas

const calcularCantidadDeSintomasPositivos = (
    fiebre,
    tos,
    dolorCabeza,
    dolorGarganta,
    respirar
) => {
    let cantidadDeSintomasPositivos = 0;

    if (fiebre === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (tos === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (dolorCabeza === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (dolorGarganta === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (respirar === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }

    return cantidadDeSintomasPositivos;
};

//FIN funcion para contar la cantidad de sintomas
