const probarValidarnombreCompleto = () => {
    console.assert(
        validarnombreCompleto(
            "11111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 50 caracter",
        "validar nombreCompleto no valido que el nombre sea <= 50 caracteres"
    );

    console.assert(
        validarnombreCompleto("ezequiel 1") ===
            "El nombre debe tener solo letras y contener un espacio ej: 'Juan salvo'",
        "validarnombreCompleto no mostro un error cuando el nombre enviado tiene numeros"
    );

    console.assert(
        validarnombreCompleto("Ezequiel Panigazzi") === "",
        "validarnombreCompleto no valido que el nombre sea correcto"
    );
};

const probarValidarGenero = () => {
    console.assert(
        validarGenero("") === "Debe seleccionar al menos una opcion de sexo",
        "validarGenero no mostro un error cuando el campo enviado fue vacio"
    );

    console.assert("female") === "",
        "validarGenero no funciono con se envio un valor correcto";
};

const probarValidarDescripcionConsulta = () => {
    console.assert(
        validarDescripcionConsulta(
            "Lorem ipsum dolor sro, quo pariatur ad labore dignissimos modi debitis temporibus accusantium alias sit, quia adipisci dolor molestiae? Laborum dolorum fugit rerum unde repudiandae.Quod tenetur expedita dolore impedit nulla, pariatur unde totam saepe id voluptates corporis, veritatis sed illum? Atque nulla, quaerat voluptates maxime voluptatibus eveniet eligendi provident. Culpa, illo. Quis, laboriosam autem.Mollitia Exercitationem maiores eveniet, inventore repudiandae rem dolorum ut, iure obcaecati autem commodi, blanditiis a! Asperiores eligendi perferendis sapiente omnis id sit. Eius animi quam blanditiis maxime libero ea expedita quod?Eos iure distinctio illo cumque sunt voluptas doloremque harum fuga unde eaque architecto tempore commodi vel, enim optio doloribus accusamus rem corrupti voluptatem incidunt quod modi! Nihil iusto explicabo consequatur.distinctio illo cumque sunt voluptas doloremque harum fuga unde eaque architecto tempore commodi vel, enim optio doloribus accusamue"
        ) === "La consulta no puede ser superior a 1000 caracteres",
        "validarDescripcionConsulta no valido que la descripcion sea <= 1000 caracteres"
    );


    console.assert(
        validarDescripcionConsulta("algoCorrecto") === "",
        "validarDescripcionConsulta no funcion con una cantidad de caracteres validos"
    );
};

const probarValidarEmail = () => {
    console.assert(
        validarEmail("@ezequiel.mail.com") ===
            "El campo email debe ser seguir el orden del ejemplo 'nombre@mail.com'",
        "validarEmail no mostro un error cuando el campo enviado fue incorrecto"
    );

    console.assert(
        validarEmail("ezequiel@mail.com") === "",
        "validarEmail no mostro un error cuando el campo enviado fue correcto"
    );
};

const probarValidarTelefono = () => {
    console.assert(
        validarTelefono("8932") ===
            "El campo telefono debe contener contener 11 caracteres '011-1234-5678'",
        "validarTelefono no mostro un error cuando el telefono enviado fue incorrecto"
    );

    console.assert(
        validarTelefono("011-6655-2520") === "",
        "validarTelefono no mostro un error cuando el telefono enviado fue correcto"
    );

    console.assert(
        validarTelefono("") === "",
        "validarTelefono no mostro un error cuando el telefono enviado fue vacio"
    );
};

probarValidarnombreCompleto();
probarValidarGenero();
probarValidarDescripcionConsulta();
probarValidarTelefono();
probarValidarEmail();
