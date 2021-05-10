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

  beforeEach(() => {
    loginPage.loginAndGoToDashBoard();
    dashPage.clickOnTags();
  });

  context("ESCENARIO 1", function () {
    it("should ADD a new tag to the list", () => {
      tagsPage.clickToAddNewTag();

      tagsPage.enterDetailsNewTag("Tag1", "descripcion del nuevo Tag");

      tagsPage.clickOnSaveTag();
    });
  });

  context("ESCENARIO 2", function () {
    it("should EDIT a tag on the list", () => {
      tagsPage.clickToExistingTag("Tag1");

      tagsPage.editDetailsExistingTag(
        "Tag1-Editada",
        "Descripcion del Tag Editado"
      );

      tagsPage.clickOnSaveTag();
    });
  });

  context("ESCENARIO 3", function () {
    it("should ADD MetaData to an existing tag on the list", () => {
      tagsPage.clickToExistingTag("Tag1");

      tagsPage.clickToMetaDataDetails();

      tagsPage.addMetaDataToExistingTag(
        "http://localhost:2368/tag/getting-started/",
        "Descripcion de la MetaData - Tag Editado"
      );

      tagsPage.clickOnSaveTag();
    });
  });

  context("ESCENARIO 4", function () {
    it("should DELETE a tag on the list", () => {
      tagsPage.clickToExistingTag("Tag1");

      tagsPage.clickDeleteTag();
    });
  });

  context("ESCENARIO 5", function () {
    it("should ADD a new tag to the Page Created", () => {
      tagsPage.clickToAddNewTag();

      tagsPage.enterDetailsNewTag("Tag1", "descripcion del nuevo Tag");

      tagsPage.clickOnSaveTag();
    });
  });
});
