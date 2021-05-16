/// <reference types="cypress" />

import faker from "faker";
import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { MemberPage } from "../../page-objects/members-page";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

describe("Members Functionality - E2E scenarios", () => {
    const loginPage = new LoginPage();
    const dashPage = new DashboardPage();
    const memberPage = new MemberPage();
    const memberName = faker.name.firstName() + " " + faker.name.lastName();
    const memberEmail = faker.internet.email();
    const note = faker.lorem.words(10);
    const functionality = "Members";
    const scenario = ["1.Crear","2.Editar","3.Eliminar","4.CrearSinCorreo","5.Buscar"];
    var step = {'step':1};
    var cont = 0

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard(scenario[cont]+functionality, step);
        dashPage.clickOnMember(scenario[cont]+functionality, step);
      });

    context('ESCENARIO 1', function() {
        it("Debe poder crear un nuevo miembro", () => {
            memberPage.clickToNewMember(scenario[0]+functionality, step);
            memberPage.typeName(memberName, scenario[0]+functionality, step);
            memberPage.typeEmail(memberEmail, scenario[0]+functionality, step);
            memberPage.typeNote(note, scenario[0]+functionality, step);
            memberPage.clickSaveMember();
            cont++;
        })
    });
        
    context('ESCENARIO 2', function() {
        it("Debe poder editar un miembro", () => {
            memberPage.clickToMember(scenario[1]+functionality, step);
            memberPage.typeName(memberName, scenario[1]+functionality, step);
            memberPage.typeNote(note, scenario[1]+functionality, step);
            memberPage.clickSaveMember(scenario[1]+functionality, step);
            cont++;
        })
    });
        
    context('ESCENARIO 3', function() {
        it("Debe poder eliminar un miembro", () => {
            memberPage.clickToMember(scenario[2]+functionality, step);
            memberPage.deleteMember(scenario[2]+functionality, step);
            cont++;
        })
    });
        
    context('ESCENARIO 4', function() {
        it("Intentar crear un nuevo miembro sin correo", () => {
            memberPage.clickToNewMember(scenario[3]+functionality, step);
            memberPage.typeName(memberName, scenario[3]+functionality, step);
            memberPage.typeNote(note, scenario[3]+functionality, step);
            memberPage.clickSaveMember(scenario[3]+functionality, step);
            cont++;
        })
    });
        
    context('ESCENARIO 5', function() {
        it("Debe poder buscar un miembro", () => {
            memberPage.searchMember(memberName, scenario[4]+functionality, step);
        })
    });
})