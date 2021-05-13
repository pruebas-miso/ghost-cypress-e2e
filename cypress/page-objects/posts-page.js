/// <reference types="cypress" />

export class PostPage {
  
    clickToNewPost() {
      cy.get(".gh-btn.gh-btn-green.ember-view").first().click({ force: true });
    }

    addTitle(title) {
        cy.get(".gh-editor-title.ember-text-area.gh-input").type(title);
    }

    addTextInPost(text){
        cy.get('.koenig-editor__editor-wrapper').type(text);
    }

    publishNowPost(){
       cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').first().click({ force: true });
    }

    createDrafPost(){
        cy.get('.koenig-editor__editor-wrapper').click()
        cy.get('.koenig-editor__editor-wrapper').type('.')
    }

    getLastDrafPost(){
        this.getPostWithName('(Untitled)')
    }

    addTitle(title){
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type(`${title}{enter}`)
    }
    addParagraph(paragraph){
        cy.get('.koenig-editor__editor-wrapper').type(paragraph)
    }
    
    savePost(){
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click() 
    }
    
    postWithNameExist(title){
        cy.get(".gh-post-list-title").contains(title).should("not.be.empty");
    }

    postWithNotNameExist(title){
        cy.get(".gh-post-list-title").contains(title).should("not.have");
    }

    getPostWithName(title){
        cy.get(".gh-post-list-title").contains(title).click({ force: true });
    }

    clickPostSettings(){
        cy.get('.post-settings').click()
    }

    clickDeletePost(){
        cy.get('form > .gh-btn > span').click()
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click({ multiple: true,force: true })
        
    }

    scrollPostSetting(mode){
        cy.get('.settings-menu-pane-in.settings-menu.settings-menu-pane').scrollTo(mode)
    }
    
    unpublishPost(){
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click()
        cy.get('.gh-publishmenu-radio-button').first().click()
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click() 
    }

    setPostForPublishLater(){
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click()
        cy.get('.gh-publishmenu-radio-button').click({ multiple: true,force: true })
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click() 
    }
  }