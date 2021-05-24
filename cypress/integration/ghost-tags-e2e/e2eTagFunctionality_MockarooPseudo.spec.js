/// <reference types="cypress" />

import { TagsPage } from "../../page-objects/tags-page";
import { DashboardPage } from "../../page-objects/dashboard-page";
import { LoginPage } from "../../page-objects/login-page.js";
// import faker from "faker";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("TAG Functionality - E2E scenarios aleatorios Mockaroo", () => {
  const tagsPage = new TagsPage();
  const dashPage = new DashboardPage();
  const loginPage = new LoginPage();


  const functionality = "Tags";
  const scenario = ["ADD","Edit","ADD_Metadata","Delete","TagPage"];
  var step = {'step':1};
  var cont = 0


  beforeEach(function (){
    cy.fixture('MOCK_DATA_POST_PSEUDO.json').then((mock)=>{
        let randInd = randomInt(0, 999);
        this.fixture = mock[randInd]
    })  
    loginPage.loginAndGoToDashBoard(scenario[cont]+functionality,step) ;
    dashPage.clickOnPosts(scenario[cont]+functionality,step);
  });

  context("ESCENARIO 1 - ALEATORIO ", function () {
    it("should ADD a new tag to the list", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture.title_name, this.fixture.description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 1.1 - ALEATORIO ", function () {
    it("should ADD a new tag to the list", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture.title_name, this.fixture.description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 2 - ALEATORIO ", function () {
    it("should EDIT a tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture.title_name,scenario[cont]+functionality,step);

      tagsPage.editDetailsExistingTag(
        this.fixture.title_name,
        this.fixture.description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });
  
  context("ESCENARIO 2.1 - ALEATORIO ", function () {
    it("should EDIT a tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture.title_name,scenario[cont]+functionality,step);

      tagsPage.editDetailsExistingTag(
        this.fixture.title_name,
        this.fixture.description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3 - ALEATORIO ", function () {
    it("should ADD MetaData to an existing tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture.title_name,scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        this.fixture.description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3.1 - ALEATORIO ", function () {
    it("should ADD MetaData on a TAG", () => {
      tagsPage.clickToExistingTag(this.fixture.title_name,scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        this.fixture.description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3.2 - ALEATORIO ", function () {
    it("should ADD MetaData to an existing tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture.title_name,scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        this.fixture.description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 4 - ALEATORIO", function () {
    it("should DELETE a tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture.title_name,scenario[cont]+functionality,step);

      tagsPage.clickDeleteTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 5 - ALEATORIO", function () {
    it("should ADD a new tag to the Page Created", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture.title_name, this.fixture.description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
    });
  });

  context("ESCENARIO 5.1 - ALEATORIO", function () {
    it("should ADD a new tag to the Page Created", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture.title_name, this.fixture.description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
    });
  });
});
