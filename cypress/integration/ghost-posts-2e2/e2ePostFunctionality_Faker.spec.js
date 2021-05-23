/// <reference types="cypress" />

import faker from "faker";
import { LoginPage } from '../../page-objects/login-page.js';
import { DashboardPage } from "../../page-objects/dashboard-page.js";
import { PostPage } from "../../page-objects/posts-page";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("POST Functionality - E2E scenarios aleatorios", () => {
  const loginPage = new LoginPage();
  const dashPage = new DashboardPage();
  const postPage = new PostPage();
  const postTitle = faker.lorem.word();
  const postTitle2 = faker.lorem.word();
  const postTitleWithUrlImg = faker.image.imageUrl();
  const postLargeTitle = faker.lorem.paragraph(10);
  const postLargeText  = faker.lorem.paragraph(30);
  const postTitleEdited = faker.lorem.word() + " " + faker.lorem.word();
  const postText = faker.lorem.paragraph();
  const postExcerpt = faker.lorem.word();
  const postLargeExcerpt = faker.lorem.paragraph(10);
  const functionality = "Post";
  const scenario = ["Crear","Editar","Despublicar","ScheduleForLater","Eliminar"];
  var step = {'step':1};
  var cont = 0

  beforeEach(() => {
    loginPage.loginAndGoToDashBoard(scenario[cont]+functionality,step) ;
    dashPage.clickOnPosts(scenario[cont]+functionality,step);
  });

  context('ESCENARIO 1 (Positivo) creación normal',function(){

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
    })

  });

  context('ESCENARIO 2 (Negativo) creación con titulo mayor a 250 caracteres ',function(){

        it('Crear post con titulo',function(){
            postPage.clickToNewPost(scenario[0] +functionality,step);
            postPage.createDrafPost();
        })
        it('Agregar texto al post',function(){
            postPage.getLastDrafPost(scenario[0]+functionality,step);
            postPage.addTitle(postLargeTitle,scenario[0]+functionality,step);
            postPage.addParagraph(postText,scenario[0]+functionality,step);
            postPage.savePost(scenario[0]+functionality,step);
        })
    
    });

    context('ESCENARIO 3 (Positivo) creación post con texto mayor a 250 palabras ',function(){

        it('Crear post con titulo',function(){
            postPage.clickToNewPost(scenario[0] +functionality,step);
            postPage.createDrafPost();
        })
        it('Agregar texto al post',function(){
            postPage.getLastDrafPost(scenario[0]+functionality,step);
            postPage.addTitle(postTitle2,scenario[0]+functionality,step);
            postPage.addParagraph(postLargeText,scenario[0]+functionality,step);
            postPage.savePost(scenario[0]+functionality,step);
        })
        
        it('Validar que el post se creo',function(){
            postPage.postWithNameExist(postTitle,scenario[0]+functionality,step);
        })
    
    });

    context('ESCENARIO 4 (Negativo) creación post con titulo mayor a 250 caracteres y con texto mayor a 250 palabras ',function(){

        it('Crear post con titulo',function(){
            postPage.clickToNewPost(scenario[0] +functionality,step);
            postPage.createDrafPost();
        })
        it('Agregar texto al post',function(){
            postPage.getLastDrafPost(scenario[0]+functionality,step);
            postPage.addTitle(postLargeTitle,scenario[0]+functionality,step);
            postPage.addParagraph(postLargeText,scenario[0]+functionality,step);
            postPage.savePost(scenario[0]+functionality,step);
        })
            
    });

    context('ESCENARIO 5 (Positivo) creación post con titulo de URL de imagen ',function(){

        it('Crear post con titulo',function(){
            postPage.clickToNewPost(scenario[0] +functionality,step);
            postPage.createDrafPost();
        })
        it('Agregar texto al post',function(){
            postPage.getLastDrafPost(scenario[0]+functionality,step);
            postPage.addTitle(postTitleWithUrlImg,scenario[0]+functionality,step);
            postPage.addParagraph(postText,scenario[0]+functionality,step);
            postPage.savePost(scenario[0]+functionality,step);
            cont++
        })
            
    });



    context('ESCENARIO 6 (positivo) edición normal de post',function(){

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

    context('ESCENARIO 7 (negativo) edición de post con titulo mayor a 250 caracteres',function(){

        it('Editar post con titulo',function(){
            postPage.getPostWithName(postTitleEdited,scenario[1]+functionality,step);
            postPage.addTitle(postLargeTitle,scenario[1]+functionality,step);
            postPage.savePost(scenario[1]+functionality,step);
        })    
    });

    context('ESCENARIO 8 (negativo) edición de post con con texto mayor a 250 palabras',function(){

        it('Editar post con titulo',function(){
            postPage.getPostWithName(postTitleEdited,scenario[1]+functionality,step);
            postPage.addParagraph(postLargeText,scenario[1]+functionality,step);
            postPage.savePost(scenario[1]+functionality,step);
        })    
    });

    context('ESCENARIO 9 (Positivo) Agregar a post un excerpt',function(){

        it('Editar post con titulo',function(){
            postPage.getPostWithName(postTitleEdited,scenario[1]+functionality,step);
            postPage.clickPostSettings(scenario[1]+functionality,step);
            postPage.addTextInExcerpt(postExcerpt,scenario[1]+functionality,step)
            postPage.closePostSettings(scenario[1]+functionality,step)
            postPage.savePost(scenario[1]+functionality,step);
        })    
    });

    context('ESCENARIO 10 (Negativo) Agregar a post un excerpt con mas de 300 caracteres',function(){

        it('Editar post con titulo',function(){
            postPage.getPostWithName(postTitleEdited,scenario[1]+functionality,step);
            postPage.clickPostSettings(scenario[1]+functionality,step);
            postPage.addTextInExcerpt(postLargeExcerpt,scenario[1]+functionality,step)
            postPage.closePostSettings(scenario[1]+functionality,step)
            postPage.savePost(scenario[1]+functionality,step);
        })    
    });


});