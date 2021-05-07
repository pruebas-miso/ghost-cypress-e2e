/// <reference types="cypress" />

import { TagsPage } from "../../page-objects/tags-page";
import { DashboardPage } from "../../page-objects/dashboard-page";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("tag actions", () => {
  const tagsPage = new TagsPage();
  const dashPage = new DashboardPage();

  beforeEach(() => {
    tagsPage.navigatetoDashboard();
    dashPage.clickOnTags();
  });

  it("should ADD a new tag to the list", () => {
    tagsPage.clickToAddNewTag();
  });

  it("should Edit a new tag to the list", () => {
    tagsPage.clickToAddNewTag();
  });
});
