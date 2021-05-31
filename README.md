# ghost-cypress-e2e

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
- Si se tiene una instancia recien instalada de Ghost, se debe configurar el aplicativo para que habilite el menú de Members. Para ello se debe ir a la opción Labs del panel de configuración de Ghost (http://localhost:2368/ghost/#/settings/labs) y habilitar la opción Members.

**************************
# Enlaces de interes para el entregable Semana 8: 

Para ejecutar las pruebas correspondientes a: 
1. Pruebas de reconocimiento / MONKEYS, vaya a este [Link](https://github.com/pruebas-miso/monkeys)
2. Pruebas de reconocimiento / Rippers, vaya a este [Link](https://github.com/pruebas-miso/rippers)
3. Pruebas de extremo a extremo, vaya a este [Link](https://github.com/pruebas-miso/ghost-cypress-e2e/tree/v3.42.5)
4. Pruebas de regresión visual, vaya a este [Link](https://github.com/pruebas-miso/vrt)
5. Escenarios de validación de datos, vaya a este [Link](https://github.com/pruebas-miso/ghost-cypress-e2e/tree/v3.42.5)

**************************
A continuación se encuentran los enlaces para:
1. [Estrategia de pruebas](https://github.com/pruebas-miso/monkeys/raw/main/results/2021-05-26%20-%20ESTRATEGIA%20DE%20PRUEBAS%20DE%20GHOST%20-%20PRESUPUESTO%20FINAL.docx)
2. [Inventario de pruebas manuales](https://github.com/pruebas-miso/monkeys/raw/main/results/Inventario%20Pruebas%20Manuales%20Ghost%20Entrega%20Final.xlsx)
3. [Video descriptivo (estrategia, resultados, analisis y limitaciones)](https://youtu.be/6UDmNYdJdlE)
4. [Registro de las 20 incidencias](https://github.com/pruebas-miso/vrt/issues)
