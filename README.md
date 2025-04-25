# Monkey Testing Bono

## Tester

| **Nombre Completo** | **Correo Electrónico**       |
|-----------------|--------------------------|
| Fernando Parra  | f.parrav@uniandes.edu.co |


## Requisitos de instalación
- **Node.js** v23.10.0
- **Cypress** `npm install`

## Instrucciones de ejecución

1. Clona este repositorio o extrae este zip en tu equipo.
2. Desde la raíz del proyecto, ejecuta:

```bash
npm install
```
```bash
npx cypress open
```
3. Seleccione E2E Testing en el dialogo de Cypress
4. Seleccione el navegador de su preferencia (Chrome o Electron)
5. Seleccione el archivo monkey-testing-bono para comenzar la prueba

## Mensajes cy.log durante la ejecución

Durante la ejecución del monkey test, se mostrarán en la consola de Cypress mensajes como los siguientes:
- `Monkey ejecutar: <evento>`  
  Indica qué tipo de evento fue seleccionado aleatoriamente para intentar ejecutar.
- `Monkey ejecutó: <evento>`  
  Aparece cuando el monkey logró ejecutar el evento sobre un elemento valido. _Evento contado_.
- `Monkey no ejecutó: <evento>`  
  Indica que no se pudo realizar el evento porque no se encontró un elemento válido. _Evento no contado_.
- `Monkey finalizar`  
  Mensaje que aparece al completar todos los eventos programados (cuando `monkeysLeft` llega a cero).

## Estructura del proyecto
```
📦 monkey-cypress
┣–– 📂 cypress
┃     ┗–– 📂 e2e
┃           ┣–– 📜 monkey-testing-bono.cy.js
┃           ┗–– 📜 …
┣–– 📜 README.md
┣–– 📜 package.json
┣–– 📜 package-lock.json
┗–– 📜 .gitignore
``