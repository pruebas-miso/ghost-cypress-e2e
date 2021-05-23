/// <reference types="cypress" />

import faker from "faker";
import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { PagePage } from "../../page-objects/pages-page";
import { dataApriori } from "../../data/mock_data_pages_apriori";
import { dataPseudo } from "../../data/mock_data_pages_pseudo";

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
    const functionality = "Page";
    const scenario = ["Crear", "EditarTitulo", "EditarTexto", "Eliminar", "Agendar"];
    var step = { 'step': 1 };
    var cont = 0;
    var dataPoolPosition = 0;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    beforeEach(() => {
        loginPage.loginAndGoToDashBoard(scenario[cont] + functionality, step);
        dashPage.clickOnPages(scenario[cont] + functionality, step);
    });

    context('ESCENARIO 1', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(pageTitle, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(pageTitle, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(pageTitle, scenario[0] + functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 2', function () {
        it('Editar título de página', function () {
            pagePage.getDraft(pageTitle, scenario[0] + functionality, step);
            pagePage.deleteTitle(scenario[0] + functionality, step);
            pagePage.addTitle(pageTitleEdited, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página editada', function () {
            pagePage.pageWithNameExist(pageTitleEdited, scenario[0] + functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 3', function () {
        it('Editar texto de página', function () {
            pagePage.getDraft(pageTitleEdited, scenario[0] + functionality, step);
            pagePage.addParagraph(pageText, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página con texto editado', function () {
            pagePage.pageWithNameExist(pageTitleEdited, scenario[0] + functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 4', function () {
        it('Eliminar página', function () {
            pagePage.getDraft(pageTitleEdited, scenario[0] + functionality, step);
            pagePage.openSettings(scenario[0] + functionality, step);
            pagePage.deletePage(scenario[0] + functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 5', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(pageTitle, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Agendar la página', function () {
            pagePage.getDraft(pageTitle, scenario[0] + functionality, step);
            pagePage.schedulePage(scenario[0] + functionality, step);
        })
        it('Buscar página agendada', function () {
            pagePage.pageWithNameExist(pageTitle, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 6', function () {
        let ip = faker.internet.ipv6();
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(ip, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(ip, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(ip, scenario[0] + functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 7', function () {
        let paraphs = faker.lorem.paragraphs();
        it('Editar título de página', function () {
            pagePage.getDraft(pageTitle, scenario[0] + functionality, step);
            pagePage.deleteTitle(scenario[0] + functionality, step);
            pagePage.addTitle(paraphs, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página editada', function () {
            pagePage.pageWithNameExist(paraphs, scenario[0] + functionality, step);
            cont++;
        })
    });

    context('ESCENARIO 8', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle("               ", scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Agendar la página', function () {
            pagePage.getDraft("(Untitled)", scenario[0] + functionality, step);
            pagePage.schedulePage(scenario[0] + functionality, step);
        })
        it('Buscar página agendada', function () {
            pagePage.pageWithNameExist("(Untitled)", scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 9', function () {
        let phone = faker.datatype.number(9999999999);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(phone, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Agendar la página', function () {
            pagePage.getDraft(phone, scenario[0] + functionality, step);
            pagePage.schedulePage(scenario[0] + functionality, step);
        })
        it('Buscar página agendada', function () {
            pagePage.pageWithNameExist(phone, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 10', function () {
        let email = faker.internet.email();
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(email, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Agendar la página', function () {
            pagePage.getDraft(email, scenario[0] + functionality, step);
            pagePage.schedulePage(scenario[0] + functionality, step);
        })
        it('Buscar página agendada', function () {
            pagePage.pageWithNameExist(email, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 11', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 12', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 13', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 14', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 15', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 16', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 17', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 18', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 19', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 20', function () {
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataApriori[dataPoolPosition].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataApriori[dataPoolPosition].title, scenario[0] + functionality, step);
            dataPoolPosition++;
        })
    });

    context('ESCENARIO 21', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 22', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 23', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 24', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 25', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 26', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 27', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 28', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 29', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });

    context('ESCENARIO 30', function () {
        let randomData = random(0, 500);
        it('Crear página con titulo', function () {
            pagePage.clickToNewPage(scenario[0] + functionality, step);
            pagePage.addTitle(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.savePage();
        })
        it('Publicar la página', function () {
            pagePage.getDraft(dataPseudo[randomData].title, scenario[0] + functionality, step);
            pagePage.addParagraph(dataPseudo[randomData].text, scenario[0] + functionality, step);
            pagePage.publishPage(scenario[0] + functionality, step);
        })
        it('Buscar página publicada', function () {
            pagePage.pageWithNameExist(dataPseudo[randomData].title, scenario[0] + functionality, step);
        })
    });
});