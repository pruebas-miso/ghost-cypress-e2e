/// <reference types="cypress" />

import { TagsPage } from "../../page-objects/tags-page";
import { DashboardPage } from "../../page-objects/dashboard-page";
import { LoginPage } from "../../page-objects/login-page.js";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("TAG Functionality - E2E scenarios", () => {
  const tagsPage = new TagsPage();
  const dashPage = new DashboardPage();
  const loginPage = new LoginPage();
  const tagFakeDesc = faker.lorem.paragraph();
  const functionality = "Tags";
  const scenario = ["ADD","Edit","ADD_Metadata","Delete","TagPage"];
  var step = {'step':1};
  var cont = 0

  beforeEach(() => {
    loginPage.loginAndGoToDashBoard(scenario[cont]+functionality,step);
    dashPage.clickOnTags(scenario[cont]+functionality,step);
  });

  context("ESCENARIO 1", function () {
    it("should ADD a new tag to the list", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag("Tag1", "descripcion del nuevo Tag",scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 2", function () {
    it("should EDIT a tag on the list", () => {
      tagsPage.clickToExistingTag("Tag1",scenario[cont]+functionality,step);

      tagsPage.editDetailsExistingTag(
        "Tag1-Editada",
        "Descripcion del Tag Editado",
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 3", function () {
    it("should ADD MetaData to an existing tag on the list", () => {
      tagsPage.clickToExistingTag("Tag1",scenario[cont]+functionality,step);

      tagsPage.clickToMetaDataDetails(scenario[cont]+functionality,step);

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        "Descripcion de la MetaData - Tag Editado",
        scenario[cont]+functionality,step
      );

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 4", function () {
    it("should DELETE a tag on the list", () => {
      tagsPage.clickToExistingTag("Tag1",scenario[cont]+functionality,step);

      tagsPage.clickDeleteTag(scenario[cont]+functionality,step);
      cont++;
    });
  });

  context("ESCENARIO 5", function () {
    it("should ADD a new tag to the Page Created", () => {
      tagsPage.clickToAddNewTag(scenario[cont]+functionality,step);

      tagsPage.enterDetailsNewTag("Tag1", "descripcion del nuevo Tag",scenario[cont]+functionality,step);

      tagsPage.clickOnSaveTag(scenario[cont]+functionality,step);
    });
  });
});
