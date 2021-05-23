# ghost-cypress-e2e

# Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas.

 Se llevaron a cabo 120 escenarios implemetando las 3 siguientes estrategias de generación de datos : 
  - (i) pool de datos a-priori 
    * Se hicieron 40 escenarios con este tipo de estrategias y se distribuyeron de grupos de a 10 para las funcionalidades de Post, Pages , Tags y Members, para       dicha estrategia se hizo uso de la herramienta Mockaroo 
  - (ii) pool de datos (pseudo) 
    * Se hicieron 40 escenarios con este tipo de estrategias y se distribuyeron de grupos de a 10 para las funcionalidades de Post, Pages , Tags y Members, para       dicha estrategia se hizo uso de la herramienta Mockaroo y Random
  - (iii) escenario aleatorio. 
    * Se hicieron 40 escenarios con este tipo de estrategias y se distribuyeron de grupos de a 10 para las funcionalidades de Post, Pages , Tags y Members, para       dicha estrategia se hizo uso de la libreria FAKER JS 

* Este [Link](https://github.com/pruebas-miso/vrt/issues) lo direccionará al repositorio de registro de incidencias de la comparativa de versiones.

# Pasos para poder ejecutar las pruebas con datos 

Instrucciones de ejecución : 

- Estar en un directorió donde desee trabajar 
- Descargar nodeJs en la versión v12.16.1 , descargar según sistema operativo [Node](https://nodejs.org/es/download/)   
- Clonar repo : git clone https://github.com/pruebas-miso/ghost-cypress-e2e.git
- Hacer branch chechout --track origin/v3.42.5
- Entrar a la carpeta ghost-cypress-e2e : cd ghost-cypress-e2e 
- Instalar dependecias : npm install
- Se debe contar con un usuario de ghost 
- Ingresar en el archivo cypress.json los valores de :
  * baseUrl : url de ghost , este debe dirigirse al log in 
  * ghostUser : usuario de ghost
  * ghostPass : contraseña de usuario ghost 
- Ejecutar las pruebas : npx cypress run 
