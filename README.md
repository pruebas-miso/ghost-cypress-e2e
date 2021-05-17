# ghost-cypress-e2e

* Este [Link](https://github.com/pruebas-miso/ghost-cypress-e2e/wiki/Escenarios) lo direccionará a la wiki donde se encuentrán las 5 funcionailidades y 20 escenarios descritos.

* Este [Link](https://github.com/pruebas-miso/ghost-cypress-e2e/wiki/ProsContras) lo direccionará a la wiki donde se encuentrán los pros y contras de las herramientas usadas. 

* Este [Link](https://github.com/pruebas-miso/vrt/issues) lo direccionará al repositorio de registro de incidencias de la comparativa de versiones.

Instrucciones de ejecución : 

- Estar en un directorió donde desee trabajar 
- Descargar nodeJs en la versión v12.16.1 , descargar según sistema operativo [Node](https://nodejs.org/es/download/)   
- Clonar repo : git clone https://github.com/pruebas-miso/ghost-cypress-e2e.git
- Entrar a la carpeta ghost-cypress-e2e : cd ghost-cypress-e2e 
- Instalar dependecias : npm install
- Se debe contar con un usuario de ghost 
- Ingresar en el archivo cypress.json los valores de :
  * baseUrl : url de ghost , este debe dirigirse al log in 
  * ghostUser : usuario de ghost
  * ghostPass : contraseña de usuario ghost 
- Ejecutar las pruebas : npx cypress run 

