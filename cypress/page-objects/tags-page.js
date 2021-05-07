/// <reference types="cypress" />

export class TagsPage {


  navigatetoDashboard() {
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.get(".email.ember-text-field.gh-input.ember-view").type(
      "pedro3087@gmail.com"
    );
    cy.get(".password.ember-text-field.gh-input.ember-view").type(
      "administrador"
    );
    cy.get("#ember12 > span").click();
  }

  clickToAddNewTag() {
    cy.get(".ember-view.gh-btn.gh-btn-primary").first().click({ force: true });
  }

  clickToExistingTag(tagText) {
    cy.get(".gh-tag-list-name").contains(tagText).click({ force: true });
  }

  editDetailsExistingTag(tagText, tagDescr) {
    cy.waitFor("#tag-name");

    cy.get(".ember-text-field.gh-input.ember-view")
      .first()
      .clear({ force: true });
    cy.get(".ember-text-field.gh-input.ember-view")
      .first()
      .type(tagText, { force: true });
    cy.get("#tag-description").first().clear({ force: true });
    cy.get("#tag-description").first().type(tagDescr, { force: true });
  }

  clickToMetaDataDetails() {
    cy.get(".gh-expandable-title").contains('Meta data').click({ force: true });
    cy.get(".gh-btn.gh-btn-expand").first().click({ force: true });
  }
  
  addMetaDataToExistingTag(tagText, tagDescr) {
    cy.waitFor("#tag-name");


    cy.get(".ember-text-field.gh-input.ember-view")
      .last()
      .clear({ force: true });
    cy.get(".ember-text-field.gh-input.ember-view")
      .last()
      .type(tagText, { force: true });
    cy.get("#meta-description").first().clear({ force: true });
    cy.get("#meta-description").first().type(tagDescr, { force: true });
  }

  clickDeleteTag(tagText) {
    cy.get("button").contains('Delete tag').click({ force: true });
    cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").first().click({ force: true });
  }

  enterDetailsNewTag(tagText, tagDescr) {
    cy.waitFor("#tag-name");
    cy.get(".ember-text-field.gh-input.ember-view")
      .first()
      .type(tagText, { force: true });
    cy.get("#tag-description").first().type(tagDescr, { force: true });
  }

  clickOnSaveTag() {
    cy.get(".ember-view.gh-btn.gh-btn-primary").click();
  }

  validateNewCreatedTag(expectedText) {
    cy.get(`.tags-list.gh-list`).should("have.text", expectedText);
  }
}
