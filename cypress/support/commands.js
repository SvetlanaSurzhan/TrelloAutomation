/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToApplication', () => {
    // const userCredentials = {
    //     "user": {
    //         "email": "lanatest55@gmail.com",
    //         "password": "DnxCnr3x-Nxd9Z+"
    //     }
    // }

    // cy.request('POST', 'https://id.atlassian.com/login', userCredentials)
    // .its()

    cy.visit('/')
    cy.contains('Log in').click()
    cy.wait(500)
    cy.get('#username').type('lanatest55@gmail.com')
    cy.contains('Continue').click()
    cy.get('#password').type('DnxCnr3x-Nxd9Z+')
    cy.contains('Log in').click()

})