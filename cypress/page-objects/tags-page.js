/// <reference types="cypress" />

export class TagsPage {
  
  version = Cypress.config("versionGhost");
  takeScreenshoot = Cypress.config("takeScreenshoot");

  navigatetoDashboard(scenarioFunctionality,step) {
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.get(".email.ember-text-field.gh-input.ember-view").type(
      "pedro3087@gmail.com"
    );
    cy.get(".password.ember-text-field.gh-input.ember-view").type(
      "administrador"
    );
    cy.get("#ember12 > span").click()
    .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
  }

  clickToAddNewTag(scenarioFunctionality,step) {
    cy.get(".gh-btn.gh-btn-green.ember-view").first().click({ force: true })
    .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
 
  }

  clickToExistingTag(tagText,scenarioFunctionality,step) {
    cy.get(".gh-tag-list-name").contains(tagText).click({ force: true })
    .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
 
  }

  editDetailsExistingTag(tagText, tagDescr, scenarioFunctionality,step) {
    cy.waitFor("#tag-name");

    cy.get(".ember-text-field.gh-input.ember-view")
      .first()
      .clear({ force: true });
    cy.get(".ember-text-field.gh-input.ember-view")
      .first()
      .type(tagText, { force: true });
    cy.get("#tag-description").first().clear({ force: true });
    cy.get("#tag-description").first().type(tagDescr, { force: true })
    .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
 
  }

  clickToMetaDataDetails() {
    cy.get(".gh-expandable-title").contains('Meta data').click({ force: true });
    cy.get(".gh-btn.gh-btn-expand").first().click({ force: true });
  }
  
  addMetaDataToExistingTag(tagText, tagDescr, scenarioFunctionality,step) {
    cy.waitFor("#tag-name");


    cy.get(".ember-text-field.gh-input.ember-view")
      .last()
      .clear({ force: true });
    cy.get(".ember-text-field.gh-input.ember-view")
      .last()
      .type(tagText, { force: true });
    cy.get("#meta-description").first().clear({ force: true });
    cy.get("#meta-description").first().type(tagDescr, { force: true })
    .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
 
  }

  clickDeleteTag(tagText, scenarioFunctionality,step) {
    cy.get("button").contains('Delete tag').click({ force: true });
    cy.screenshot(`${this.version}/${"DeleteTag"}_cypress_paso_1`);
    cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").first().click({ force: true });   
    cy.screenshot(`${this.version}/${"DeleteTag"}_cypress_paso_2`);
  }

  enterDetailsNewTag(tagText, tagDescr, scenarioFunctionality,step) {
    cy.waitFor("#tag-name");
    cy.get(".ember-text-field.gh-input.ember-view")
      .first()
      .type(tagText, { force: true });
    cy.get("#tag-description").first().type(tagDescr, { force: true })
    .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
 
  }

  clickOnSaveTag(scenarioFunctionality,step) {
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
    // .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
 
  }

  validateNewCreatedTag(expectedText) {
    cy.get(`.tags-list.gh-list`).should("have.text", expectedText);
  }
}
