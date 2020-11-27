/// <reference types="Cypress" />

const URL = 'http://127.0.0.1:8080/';
const caracteres_1000 =
    "is simply dummy text of the printing andd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions";

context("cypress-pruebas", () => {
    before(() => {
        cy.visit(URL);
    });
    describe("Prueba pagina contacto", () => {
        it("Click en contacto", () => {
            cy.visit(URL);
            cy.contains("CONTACTO").click();

            cy.url().should("include", "/contacto.html");
        });
    });
    describe("Pruebas formulario contacto", () => {
        it("Mandamos el formulario vacio", () => {
            cy.get("form").submit();
            cy.get("#nombreCompleto").should("have.class", "error");
            cy.get("#nombreCompleto").should("have.value", "");
            cy.get("[name='email']").should("have.class", "error");
            cy.get("[name='email']").should("have.value", "");
        });

        it("Campo nombre y apellido", () => {
            cy.get("#nombreCompleto").type("Ezeq").should("have.value", "Ezeq");
            cy.get("form").submit();
            cy.get("#nombreCompleto").should("have.class", "error");
        });

        it("Campo email", () => {
            cy.get("[name='email']").type("eze@dsa");
            cy.get("form").submit();
            cy.get("[name='email']").should("have.class", "error");
        });

        it("Campo telefono", () => {
            cy.get("[name='telefono']").type("0943-54");
            cy.get("form").submit();
            cy.get("[name='telefono']").should("have.class", "error");
        });

        it("Campo comentario", () => {
            cy.get("#descripcion-consulta").type(caracteres_1000);
            cy.get("form").submit();
            cy.get("#descripcion-consulta").should("have.class", "error");
        });

        it("Mandamos el formualario correcto", () => {
            cy.get('[type="text"]').clear();
            cy.get("#descripcion-consulta").clear();

            //Nombre y apellido
            cy.get("#nombreCompleto")
                .type("Ezequiel Panigazzi")
                .should("have.value", "Ezequiel Panigazzi");

            //Email
            cy.get("[name='email']")
                .type("ezequiel@mail.com")
                .should("have.value", "ezequiel@mail.com");

            //Telefono
            cy.get("[name='telefono']").type("011-4443-4509");

            //Comentario
            cy.get("#descripcion-consulta").type("Hola todo bien?");

            cy.get("form").submit();
            cy.get("#exito").should("be.visible");
        });
    });

    describe("Prueba enlases", () => {
        it("redes sociales", () => {
            cy.get(".web-list .fa-facebook").click();
            cy.get(".web-list .fa-instagram").click();
            cy.get(".web-list .fa-twitter").click();
        });

        it("redes sociales footer", () => {
            cy.get(".footer-right .fa-facebook").click();
            cy.get(".footer-right .fa-instagram").click();
            cy.get(".footer-right .fa-twitter").click();
        });

        it("Pestañas paginas", () => {
            cy.contains("Enfermedades").click();
            cy.url().should("include", "/listado-enfermedades.html");
            cy.contains("Vacunas").click();
            cy.url().should("include", "/vacunas.html");
            cy.contains("Hospitales").click();
            cy.url().should("include", "/mapa.html");
            cy.contains("Contacto").click();
            cy.url().should("include", "/contacto.html");
        });
    });
});