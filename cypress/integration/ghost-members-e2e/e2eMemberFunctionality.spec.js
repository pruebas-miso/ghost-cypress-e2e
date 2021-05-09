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

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard();
        dashPage.clickOnMember();
      });

    it("Debe poder crear un nuevo miembro", () => {
        memberPage.clickToNewMember();
        memberPage.typeName(memberName);
        memberPage.typeEmail(memberEmail);
        memberPage.typeNote(note);
        memberPage.clickSaveMember();
    })

    it("Debe poder editar un miembro", () => {
        memberPage.clickToMember();
        memberPage.typeName(memberName);
        memberPage.typeNote(note);
        memberPage.clickSaveMember();
    })

    it("Debe poder eliminar un miembro", () => {
        memberPage.clickToMember();
        memberPage.deleteMember();
    })

    it("Intentar crear un nuevo miembro sin correo", () => {
        memberPage.clickToNewMember();
        memberPage.typeName(memberName);
        memberPage.typeNote(note);
        memberPage.clickSaveMember();
    })

    it("Debe poder buscar un miembro", () => {
        memberPage.searchMember();
    })


})