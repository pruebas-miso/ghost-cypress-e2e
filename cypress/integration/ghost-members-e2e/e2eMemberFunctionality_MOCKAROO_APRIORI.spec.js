/// <reference types="cypress" />

import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { MemberPage } from "../../page-objects/members-page";
import { dataApriori } from "../../data/mock_data_members_apriori";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

describe("Members Functionality - E2E scenarios", () => {
    const loginPage = new LoginPage();
    const dashPage = new DashboardPage();
    const memberPage = new MemberPage();
    const functionality = "Members";
    const scenario = ["1.Crear","2.Editar","3.Eliminar","4.CrearSinCorreo","5.Buscar"];
    var step = {'step':1};
    var cont = 0

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard(scenario[cont]+functionality, step);
        dashPage.clickOnMember(scenario[cont]+functionality, step);
    });

    context('ESCENARIO 1 - ALEATORIO', function() {
        it("Debe poder crear un nuevo miembro", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(dataApriori[0].name, scenario[0]+functionality, step);
            memberPage.typeEmail(dataApriori[0].email, scenario[0]+functionality, step);
            memberPage.typeNote(dataApriori[0].note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
        })
    });

    context('ESCENARIO 2 - ALEATORIO', function() {
        it("No Debe poder crear un nuevo miembro por correo invalido", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(dataApriori[1].name, scenario[0]+functionality, step);
            memberPage.typeEmail(dataApriori[0].badEmail, scenario[0]+functionality, step);
            memberPage.typeNote(dataApriori[0].note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
            memberPage.validateMemberCreation();
        })
    });
        
    context('ESCENARIO 3 - ALEATORIO', function() {
        it("Debe poder editar un miembro", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataApriori[1].name, scenario[1]+functionality, step);
            memberPage.typeNote(dataApriori[1].note, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
        })
    });

    context('ESCENARIO 4 - ALEATORIO', function() {
        it("No debe poder editar un miembro por nombre invalido", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataApriori[2].paragraph, scenario[1]+functionality, step);
            memberPage.typeNote(dataApriori[2].note, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberEdit();
        })
    });
    
    context('ESCENARIO 5 - ALEATORIO', function() {
        it("No debe poder editar un miembro por correo invalido", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataApriori[3].name, scenario[1]+functionality, step);
            memberPage.typeNote(dataApriori[3].note, scenario[1]+functionality, step);
            memberPage.typeEmail(dataApriori[3].email+dataApriori[3].email, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberCreation();
        })
    });

    context('ESCENARIO 6 - ALEATORIO', function() {
        it("No debe poder editar un miembro por nota invalida", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataApriori[4].name, scenario[1]+functionality, step);
            memberPage.typeNote(dataApriori[4].paragraph, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberNoteEdit();
        })
    });

    context('ESCENARIO 7 - ALEATORIO', function() {
        it("Debe poder eliminar un miembro", () => {
            memberPage.clickToMember(scenario[2]+functionality, step);
            memberPage.deleteMember(scenario[2]+functionality, step);
        })
    });
        
    context('ESCENARIO 8 - ALEATORIO', function() {
        it("Intentar crear un nuevo miembro sin correo", () => {
            memberPage.clickToNewMember(scenario[3]+functionality, step);
            memberPage.typeName(dataApriori[5].name, scenario[3]+functionality, step);
            memberPage.typeNote(dataApriori[5].note, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
        })
    });

    context('ESCENARIO 9 - ALEATORIO', function() {
        it("Intentar crear un nuevo miembro sin nombre", () => {
            memberPage.clickToNewMember(scenario[3]+functionality, step);
            memberPage.typeEmail(dataApriori[6].email, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
            memberPage.validateMemberEmailCreation(dataApriori[6].email);
        })
    });
        
    context('ESCENARIO 10 - ALEATORIO', function() {
        it("Debe poder buscar un miembro", () => {
            memberPage.searchMember(dataApriori[0].name, scenario[4]+functionality, step);
        })
    });
});