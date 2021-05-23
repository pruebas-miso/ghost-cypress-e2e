/// <reference types="cypress" />

export class PostPage {

    version = Cypress.config("versionGhost");
    takeScreenshoot = Cypress.config("takeScreenshoot");
  
    clickToNewPost(scenarioFunctionality,step) {
      cy.get(".gh-btn.gh-btn-green.ember-view").first().click({ force: true })
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    addTitle(title,scenarioFunctionality,step) {
        cy.get(".gh-editor-title.ember-text-area.gh-input").clear().type(title)
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    publishNowPost(){
       cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').first().click({ force: true });
    }

    createDrafPost(){
        cy.get('.koenig-editor__editor-wrapper').click()
        cy.get('.koenig-editor__editor-wrapper').type('.')
    }

    getLastDrafPost(scenarioFunctionality,step){
        this.getPostWithName('(Untitled)',scenarioFunctionality,step)
    }

    addParagraph(paragraph,scenarioFunctionality,step){
        cy.get('.koenig-editor__editor-wrapper').type(paragraph)
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    addTextInExcerpt(paragraph,scenarioFunctionality,step){
      cy.get('.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').type(paragraph)
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    closePostSettings(scenarioFunctionality,step){
      cy.get('.close.settings-menu-header-action').click()
        .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    savePost(scenarioFunctionality,step){
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click()
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click() 
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }
    
    postWithNameExist(title,scenarioFunctionality,step){
        cy.get(".gh-post-list-title").contains(title).should("not.be.empty")
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }
    

    postWithNotNameExist(title,scenarioFunctionality,step){
        cy.get(".gh-post-list-title").contains(title).should("not.have")
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    getPostWithName(title,scenarioFunctionality,step){
        cy.get(".gh-post-list-title").contains(title).click({ force: true })
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    clickPostSettings(scenarioFunctionality,step){
        cy.get('.post-settings').click()
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }

    clickDeletePost(scenarioFunctionality,step){
        cy.wait(500);
        cy.get('form > .gh-btn > span').click();
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click({ multiple: true,force: true })
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
        cy.wait(500);  
    }

    scrollPostSetting(mode,scenarioFunctionality,step){
        cy.get('.settings-menu-pane-in.settings-menu.settings-menu-pane').scrollTo(mode)
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }
    
    unpublishPost(scenarioFunctionality,step){
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click()
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
        cy.get('.gh-publishmenu-radio-button').first().click()
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click() 
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null}); 
    }

    setPostForPublishLater(scenarioFunctionality,step){
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click()
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
        cy.get('.gh-publishmenu-radio-button').click({ multiple: true,force: true })
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click() 
          .then(async()=>{this.takeScreenshoot ? await cy.screenshot(`${this.version}/${scenarioFunctionality}_cypress_paso_${step['step']++}`):null});
    }
  }
