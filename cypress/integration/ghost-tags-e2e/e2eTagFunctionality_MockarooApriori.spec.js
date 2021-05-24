/// <reference types="cypress" />

import { TagsPage } from "../../page-objects/tags-page";
import { DashboardPage } from "../../page-objects/dashboard-page";
import { LoginPage } from "../../page-objects/login-page.js";
// import faker from "faker";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("TAG Functionality - E2E scenarios aleatorios Mockaroo", () => {
  const tagsPage = new TagsPage();
  const dashPage = new DashboardPage();
  const loginPage = new LoginPage();
  // const tagTitle = faker.lorem.word();
  // const tagFakeDesc = faker.lorem.paragraph();


  const functionality = "Tags";
  const scenario = ["ADD","Edit","ADD_Metadata","Delete","TagPage"];
  var step = {'step':1};
  var cont = 0

  before(function(){
    cy.fixture('MOCK_DATA_TAGS_APRIORI.json').then((mock)=>{
      this.fixture = mock
  })  
    
  });
  beforeEach(function (){
    loginPage.loginAndGoToDashBoard(scenario[cont]+functionality,step) ;
    dashPage.clickOnPosts(scenario[cont]+functionality,step);
  });

  context("ESCENARIO 1 - ALEATORIO ", function () {
    it("should ADD a new tag to the list", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture[0].title_name, this.fixture[0].description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 1.1 - ALEATORIO ", function () {
    it("should ADD a new tag to the list", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture[1].title_name, this.fixture[0].description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 2 - ALEATORIO ", function () {
    it("should EDIT a tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture[1].title_name,scenario[cont]+functionality,step);

      tagsPage.editDetailsExistingTag(
        this.fixture[2].title_name,
        this.fixture[0].description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });
  
  context("ESCENARIO 2.1 - ALEATORIO ", function () {
    it("should EDIT a tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture[1].title_name,scenario[cont]+functionality,step);

      tagsPage.editDetailsExistingTag(
        this.fixture[3].title_name,
        this.fixture[0].description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3 - ALEATORIO ", function () {
    it("should ADD MetaData to an existing tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture[1].title_name,scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        this.fixture[0].description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3.1 - ALEATORIO ", function () {
    it("should NOT ADD MetaData on a TAG", () => {
      tagsPage.clickToExistingTag(this.fixture[1].title_name,scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        this.fixture[0].description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3.2 - ALEATORIO ", function () {
    it("should NOT ADD MetaData to an existing tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture[1].title_name,scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        this.fixture[0].description,
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 4 - ALEATORIO", function () {
    it("should DELETE a tag on the list", () => {
      tagsPage.clickToExistingTag(this.fixture[1].title_name,scenario[cont]+functionality,step);

      tagsPage.clickDeleteTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 5 - ALEATORIO", function () {
    it("should ADD a new tag to the Page Created", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture[4].title_name, this.fixture[0].description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
    });
  });

  context("ESCENARIO 5.1 - ALEATORIO", function () {
    it("should NOT ADD a new tag to the Page Created", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag(this.fixture[5].title_name, this.fixture[0].description,scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
    });
  });
});
