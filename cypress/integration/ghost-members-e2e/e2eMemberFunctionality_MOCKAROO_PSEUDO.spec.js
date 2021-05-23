/// <reference types="cypress" />

import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { MemberPage } from "../../page-objects/members-page";

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

    before(function(){
        cy.fixture('MOCK_DATA_MEMBERS_PSEUDO').then((mock)=>{
            let randInd = randomInt(0, 500);
            this.fixture = mock[randInd]
      })  
    });

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard(scenario[cont]+functionality, step);
        dashPage.clickOnMember(scenario[cont]+functionality, step);
    });

    context('ESCENARIO 1 - ALEATORIO', function() {
        it("Debe poder crear un nuevo miembro", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(this.fixture.name, scenario[0]+functionality, step);
            memberPage.typeEmail(this.fixture.email, scenario[0]+functionality, step);
            memberPage.typeNote(this.fixture.note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
        })
    });

    context('ESCENARIO 2 - ALEATORIO', function() {
        it("No Debe poder crear un nuevo miembro por correo invalido", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(this.fixture.name, scenario[0]+functionality, step);
            memberPage.typeEmail(this.fixture.badEmail, scenario[0]+functionality, step);
            memberPage.typeNote(this.fixture.note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
            memberPage.validateMemberCreation();
            cont++;
        })
    });
        
    context('ESCENARIO 3 - ALEATORIO', function() {
        it("Debe poder editar un miembro", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(this.fixture.name, scenario[1]+functionality, step);
            memberPage.typeNote(this.fixture.note, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 4 - ALEATORIO', function() {
        it("No debe poder editar un miembro por nombre invalido", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(this.fixture.paragraph, scenario[1]+functionality, step);
            memberPage.typeNote(this.fixture.note, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberEdit();
            cont++;
        })
    });
    
    context('ESCENARIO 5 - ALEATORIO', function() {
        it("No debe poder editar un miembro por correo invalido", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(this.fixture.name, scenario[1]+functionality, step);
            memberPage.typeNote(this.fixture.note, scenario[1]+functionality, step);
            memberPage.typeEmail(this.fixture.badEmail, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberCreation();
            cont++;
        })
    });

    context('ESCENARIO 6 - ALEATORIO', function() {
        it("No debe poder editar un miembro por nota invalida", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(this.fixture.name, scenario[1]+functionality, step);
            memberPage.typeNote(this.fixture.paragraph, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            memberPage.validateMemberNoteEdit();
            cont++;
        })
    });

    context('ESCENARIO 7 - ALEATORIO', function() {
        it("Debe poder eliminar un miembro", () => {
            memberPage.clickToMember(scenario[2]+functionality, step);
            memberPage.deleteMember(scenario[2]+functionality, step);
            cont++;
        })
    });
        
    context('ESCENARIO 8 - ALEATORIO', function() {
        it("Intentar crear un nuevo miembro sin correo", () => {
            memberPage.clickToNewMember(scenario[3]+functionality, step);
            memberPage.typeName(this.fixture.name, scenario[3]+functionality, step);
            memberPage.typeNote(this.fixture.note, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 9 - ALEATORIO', function() {
        it("Intentar crear un nuevo miembro sin nombre", () => {
            memberPage.clickToNewMember(scenario[3]+functionality, step);
            memberPage.typeEmail(this.fixture.email, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
            memberPage.validateMemberEmailCreation(this.fixture[6].email);
            cont++;
        })
    });
        
    context('ESCENARIO 10 - ALEATORIO', function() {
        it("Debe poder buscar un miembro", () => {
            memberPage.searchMember(this.fixture.name, scenario[4]+functionality, step);
        })
    });
});