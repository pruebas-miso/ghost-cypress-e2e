/// <reference types="cypress" />

export class MemberPage {
    clickToNewMember() {
        cy.get('#ember51 > span').click();
    }

    typeName(name) {
        cy.get('#member-name').type(name, { force: true });
    }

    typeEmail(email) {
        cy.get('#member-email').type(email, { force: true });
    }

    typeNote(note) {
        cy.get('#member-note').type(note, { force : true });
    }

    clickSaveMember() {
        cy.get('#ember94 > span').click();
    }

    clickToMember() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('#ember76').click();
    }

    deleteMember() {
        cy.get('.gh-btn-red > span').click();
        cy.get('#ember113 > span').click();
    }

    SearchMember() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('#ember137').type("Roberto");
    }
    
}