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
  const functionality = "Post";
  const scenario = ["Crear","Editar","Despublicar","ScheduleForLater","Eliminar"];
  var step = {'step':1};
  var cont = 0

  beforeEach(() => {
    loginPage.loginAndGoToDashBoard(scenario[cont]+functionality,step) ;
    dashPage.clickOnPosts(scenario[cont]+functionality,step);
  });

  context('ESCENARIO 1',function(){

    it('Crear post con titulo',function(){
        postPage.clickToNewPost(scenario[0] +functionality,step);
        postPage.createDrafPost();
    })
    it('Agregar texto al post',function(){
        postPage.getLastDrafPost(scenario[0]+functionality,step);
        postPage.addTitle(postTitle,scenario[0]+functionality,step);
        postPage.addParagraph(postText,scenario[0]+functionality,step);
        postPage.savePost(scenario[0]+functionality,step);
    })
    it('Validar que el post se creo',function(){
        postPage.postWithNameExist(postTitle,scenario[0]+functionality,step);
        cont++;
    })

    });

    context('ESCENARIO 2',function(){

        it('Editar post con titulo',function(){
            postPage.getPostWithName(postTitle,scenario[1]+functionality,step);
            postPage.addTitle(postTitleEdited,scenario[1]+functionality,step);
            postPage.savePost(scenario[1]+functionality,step);
        })
        it('Validar que el post se actualizo',function(){
            postPage.postWithNameExist(postTitleEdited,scenario[1]+functionality,step);
            cont++;
        })
    
  });

    context('ESCENARIO 3',function(){
        it('Despublicar post',function(){
            postPage.getPostWithName(postTitleEdited,scenario[2]+functionality,step);
            postPage.unpublishPost(scenario[2]+functionality,step);
            cont++;
        })

    });

    context('ESCENARIO 4',function(){
        it('schedule it for later de post en draf',function(){
            postPage.getPostWithName(postTitleEdited,scenario[3]+functionality,step);
            postPage.setPostForPublishLater(scenario[3]+functionality,step);
            cont++;
        })

    });

    context('ESCENARIO 5',function(){
        it('Eliminar post con titulo',function(){
            postPage.getPostWithName(postTitleEdited,scenario[4]+functionality,step);
            postPage.clickPostSettings(scenario[4]+functionality,step);
            postPage.scrollPostSetting("bottom",scenario[4]+functionality,step)
            postPage.clickDeletePost(scenario[4]+functionality,step);
            postPage.postWithNotNameExist(postTitleEdited,scenario[4]+functionality,step);
        })
    
    });

});