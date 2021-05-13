/// <reference types="cypress" />

import faker from "faker";
import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { PostPage } from "../../page-objects/posts-page";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("POST Functionality - E2E scenarios", () => {
  const loginPage = new LoginPage();
  const dashPage = new DashboardPage();
  const postPage = new PostPage();
  const postTitle = faker.lorem.word();
  const postTitleEdited = faker.lorem.word() + " " + faker.lorem.word();
  const postText = faker.lorem.paragraph();

  beforeEach(() => {
    loginPage.loginAndGoToDashBoard() ;
    dashPage.clickOnPosts();
  });

  context('ESCENARIO 1',function(){
    it('Crear post con titulo',function(){
        postPage.clickToNewPost();
        postPage.createDrafPost();
    })
    it('Agregar texto al post',function(){
        postPage.getLastDrafPost();
        postPage.addTitle(postTitle);
        postPage.addParagraph(postText);
        postPage.savePost();
    })
    it('Validar que el post se creo',function(){
        postPage.postWithNameExist(postTitle);
    })

    });

    context('ESCENARIO 2',function(){
        it('Editar post con titulo',function(){
            postPage.getPostWithName(postTitle);
            postPage.addTitle(postTitleEdited);
            postPage.savePost();
        })
        it('Validar que el post se actualizo',function(){
            postPage.postWithNameExist(postTitleEdited);
        })
    
    });

    context('ESCENARIO 3',function(){
        it('Despublicar post',function(){
            postPage.getPostWithName(postTitleEdited);
            postPage.unpublishPost();
        })

    });

    context('ESCENARIO 4',function(){
        it('schedule it for later de post en draf',function(){
            postPage.getPostWithName(postTitleEdited);
            postPage.setPostForPublishLater();
        })

    });

    context('ESCENARIO 5',function(){
        it('Eliminar post con titulo',function(){
            postPage.getPostWithName(postTitleEdited);
            postPage.clickPostSettings();
            postPage.scrollPostSetting("bottom")
            postPage.clickDeletePost();
            postPage.postWithNotNameExist(postTitleEdited);
        })
    
    });

    

});