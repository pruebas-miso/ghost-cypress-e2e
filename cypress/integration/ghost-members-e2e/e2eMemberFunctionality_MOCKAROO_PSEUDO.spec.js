/// <reference types="cypress" />

import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { MemberPage } from "../../page-objects/members-page";
import { dataPseudo } from "../../data/mock_data_members_pseudo";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

describe("Members Functionality - E2E scenarios", () => {
    const loginPage = new LoginPage();
    const dashPage = new DashboardPage();
    const memberPage = new MemberPage();
    const functionality = "Members";
    const scenario = ["1.Crear","2.Editar","3.Eliminar","4.CrearSinCorreo","5.Buscar"];
    var step = {'step':1};
    var cont = 0
    const random = randomInt(0,498);

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard(scenario[cont]+functionality, step);
        dashPage.clickOnMember(scenario[cont]+functionality, step);
    });

    context('ESCENARIO 1 - ALEATORIO', function() {
        it("Debe poder crear un nuevo miembro", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(dataPseudo[random].name, scenario[0]+functionality, step);
            memberPage.typeEmail(dataPseudo[random].email, scenario[0]+functionality, step);
            memberPage.typeNote(dataPseudo[random].note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
        })
    });

    context('ESCENARIO 2 - ALEATORIO', function() {
        it("No Debe poder crear un nuevo miembro por correo invalido", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(dataPseudo[random].name, scenario[0]+functionality, step);
            memberPage.typeEmail(dataPseudo[random].badEmail, scenario[0]+functionality, step);
            memberPage.typeNote(dataPseudo[random].note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
            memberPage.validateMemberCreation();
        })
    });
        
    context('ESCENARIO 3 - ALEATORIO', function() {
        it("Debe poder editar un miembro", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataPseudo[random+1].name, scenario[1]+functionality, step);
            memberPage.typeNote(dataPseudo[random+1].note, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
        })
    });

    context('ESCENARIO 4 - ALEATORIO', function() {
        it("No debe poder editar un miembro por nombre invalido", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataPseudo[random].paragraph, scenario[1]+functionality, step);
           memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberEdit();
        })
    });
    
    context('ESCENARIO 5 - ALEATORIO', function() {
        it("No debe poder editar un miembro por correo invalido", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(dataPseudo[random].name, scenario[1]+functionality, step);
            memberPage.typeNote(dataPseudo[random].note, scenario[1]+functionality, step);
            memberPage.typeEmail(dataPseudo[random].email+dataPseudo[random].email, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberCreation();
        })
    });

    context('ESCENARIO 6 - ALEATORIO', function() {
        it("No debe poder editar un miembro por nota invalida", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeNote(dataPseudo[random].paragraph, scenario[1]+functionality, step);
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
            memberPage.typeName(dataPseudo[random].name, scenario[3]+functionality, step);
            memberPage.typeNote(dataPseudo[random].note, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
        })
    });

    context('ESCENARIO 9 - ALEATORIO', function() {
        it("Intentar crear un nuevo miembro sin nombre", () => {
            memberPage.clickToNewMember(scenario[3]+functionality, step);
            memberPage.typeEmail(dataPseudo[random+1].email, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
            memberPage.validateMemberEmailCreation(dataPseudo[random+1].email);
        })
    });
        
    context('ESCENARIO 10 - ALEATORIO', function() {
        it("Debe poder buscar un miembro", () => {
            memberPage.searchMember(dataPseudo[random].name, scenario[4]+functionality, step);
        })
    });
});