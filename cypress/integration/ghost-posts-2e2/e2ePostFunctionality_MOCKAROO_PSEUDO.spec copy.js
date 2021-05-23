/// <reference types="cypress" />

import faker from "faker";
import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { PostPage } from "../../page-objects/posts-page";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

describe("POST Functionality - E2E scenarios aleatorios", () => {
  const loginPage = new LoginPage();
  const dashPage = new DashboardPage();
  const postPage = new PostPage();
  const functionality = "Post";
  const scenario = ["Crear","Editar","Despublicar","ScheduleForLater","Eliminar"];
  var step = {'step':1};
  var cont = 0

  beforeEach(function (){
    cy.fixture('MOCK_DATA_POST_PSEUDO.json').then((mock)=>{
        let randInd = randomInt(0, 500);
        this.fixture = mock[randInd]
    })  
    loginPage.loginAndGoToDashBoard(scenario[cont]+functionality,step) ;
    dashPage.clickOnPosts(scenario[cont]+functionality,step);
  });

  context('ESCENARIO 1 (Positivo) creación post normal',function(){

    it('Crear post con titulo',function(){
        postPage.clickToNewPost(scenario[0] +functionality,step);
        postPage.createDrafPost();
    })
    it('Agregar texto al post',function(){
        postPage.getLastDrafPost(scenario[0]+functionality,step);
        postPage.addTitle(this.fixture.title,scenario[0]+functionality,step);
        postPage.addParagraph(this.fixture.paragraph,scenario[0]+functionality,step);
        postPage.savePost(scenario[0]+functionality,step);
    })
  });

  context('ESCENARIO 2 (Negativo) creación post con injeccion sql en titulo',function(){

    it('Crear post con titulo',function(){
        postPage.clickToNewPost(scenario[0] +functionality,step);
        postPage.createDrafPost();
    })
    it('Agregar texto al post',function(){
        postPage.getLastDrafPost(scenario[0]+functionality,step);
        postPage.addTitle(this.fixture.sql_injection,scenario[0]+functionality,step);
        postPage.addParagraph(this.fixture.paragraph,scenario[0]+functionality,step);
        postPage.savePost(scenario[0]+functionality,step);
    })
  });

  context('ESCENARIO 3 (Negativo) creación post con naugthy string en titulo',function(){

    it('Crear post con titulo',function(){
        postPage.clickToNewPost(scenario[0] +functionality,step);
        postPage.createDrafPost();
    })
    it('Agregar texto al post',function(){
        postPage.getLastDrafPost(scenario[0]+functionality,step);
        postPage.addTitle(this.fixture.naughty_string,scenario[0]+functionality,step);
        postPage.addParagraph(this.fixture.paragraph,scenario[0]+functionality,step);
        postPage.savePost(scenario[0]+functionality,step);
    })
  });

  context('ESCENARIO 4 (Negativo) creación post con titulo mayor a 255 caracteres',function(){

    it('Crear post con titulo',function(){
        postPage.clickToNewPost(scenario[0] +functionality,step);
        postPage.createDrafPost();
    })
    it('Agregar texto al post',function(){
        postPage.getLastDrafPost(scenario[0]+functionality,step);
        postPage.addTitle(this.fixture.large_paragraph.replace(/(\r\n|\n|\r)/gm, ""),scenario[0]+functionality,step);
        postPage.addParagraph(this.fixture.paragraph,scenario[0]+functionality,step);
        postPage.savePost(scenario[0]+functionality,step);
    })
  });


    context('ESCENARIO 5 (positivo) edición normal de post',function(){

            it('Editar post con titulo',function(){
                postPage.getlastPost();
                postPage.addTitle(this.fixture.title,scenario[1]+functionality,step);
                postPage.savePost(scenario[1]+functionality,step);
            })        
    });

    context('ESCENARIO 6 (negativo) edición de post con nuevo nauthy string en titulo',function(){

      it('Editar post con titulo',function(){
          postPage.getlastPost();
          postPage.addTitle(this.fixture.naughty_string,scenario[1]+functionality,step);
          postPage.savePost(scenario[1]+functionality,step);
      })        
    });

    context('ESCENARIO 7 (negativo) edición de post con titulo mayor a 255 caracteres',function(){

      it('Editar post con titulo',function(){
          postPage.getlastPost();
          postPage.addTitle(this.fixture.large_paragraph.replace(/(\r\n|\n|\r)/gm, ""),scenario[1]+functionality,step);
          postPage.savePost(scenario[1]+functionality,step);
      })        
    });

    context('ESCENARIO 8 (Positivo) Agregar a post un excerpt',function(){

        it('Editar post con titulo',function(){
            postPage.getlastPost();
            postPage.clickPostSettings(scenario[1]+functionality,step);
            postPage.addTextInExcerpt(this.fixture.title,scenario[1]+functionality,step)
            postPage.closePostSettings(scenario[1]+functionality,step)
            postPage.savePost(scenario[1]+functionality,step);
        })    
    });

    context('ESCENARIO 9 (Negativo) Agregar a post un excerpt con nauthy string',function(){

      it('Editar post con titulo',function(){
          postPage.getlastPost();
          postPage.clickPostSettings(scenario[1]+functionality,step);
          postPage.addTextInExcerpt(this.fixture.naughty_string,scenario[1]+functionality,step)
          postPage.closePostSettings(scenario[1]+functionality,step)
          postPage.savePost(scenario[1]+functionality,step);
      })    
  });

    context('ESCENARIO 10 (negativo) Agregar a post un excerpt con texto mayor a 300 caracteres',function(){

      it('Editar post con titulo',function(){
          postPage.getlastPost();
          postPage.clickPostSettings(scenario[1]+functionality,step);
          postPage.addTextInExcerpt(this.fixture.large_paragraph.replace(/(\r\n|\n|\r)/gm, ""),scenario[1]+functionality,step)
          postPage.closePostSettings(scenario[1]+functionality,step)
          postPage.savePost(scenario[1]+functionality,step);
      })    
  });

});