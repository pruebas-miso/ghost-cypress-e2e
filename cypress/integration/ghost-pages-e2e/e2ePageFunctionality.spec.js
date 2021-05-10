/// <reference types="cypress" />

import faker from "faker";
import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { PagePage } from "../../page-objects/pages-page";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("PAGE Functionality - E2E scenarios", () => {
    const loginPage = new LoginPage();
    const dashPage = new DashboardPage();
    const pagePage = new PagePage();
    const pageTitle = faker.lorem.word();
    const pageTitleEdited = faker.lorem.word() + " " + faker.lorem.word();
    const pageText = faker.lorem.paragraph();

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard();
        dashPage.clickOnPages();
    });

    context('ESCENARIO 1', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage();
            pagePage.addTitle(pageTitle);
            pagePage.savePage();
        })
        it('Publicar la página',function(){
            pagePage.getDraft(pageTitle);
            pagePage.publishPage();
        })
        it('Buscar página publicada',function(){
            pagePage.pageWithNameExist(pageTitle);
        })
    });

    context('ESCENARIO 2', function () {
        it('Editar título de página', function () {
            pagePage.getDraft(pageTitle);
            pagePage.deleteTitle(pageTitle);
            pagePage.addTitle(pageTitleEdited);
            pagePage.publishPage();
        })
        it('Buscar página editada',function(){
            pagePage.pageWithNameExist(pageTitleEdited);
        })
    });

    context('ESCENARIO 3', function () {
        it('Editar texto de página', function () {
            pagePage.getDraft(pageTitleEdited);
            pagePage.addParagraph(pageText);
            pagePage.publishPage();
        })
        it('Buscar página con texto editado',function(){
            pagePage.pageWithNameExist(pageTitleEdited);
        })
    });

    context('ESCENARIO 4', function () {
        it('Eliminar página', function () {
            pagePage.getDraft(pageTitleEdited);
            pagePage.openSettings();
            pagePage.deletePage();
        })
    });

    context('ESCENARIO 5', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage();
            pagePage.addTitle(pageTitle);
            pagePage.savePage();
        })
        it('Agendar la página',function(){
            pagePage.getDraft(pageTitle);
            pagePage.schedulePage();
        })
        it('Buscar página agendada',function(){
            pagePage.pageWithNameExist(pageTitle);
        })
    });
});