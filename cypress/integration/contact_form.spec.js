/// <reference types="cypress"/>

describe('contact form', () => {

  it('sends customer message and details with success', () =>{
    cy.visit('https://rain.us/contact/')
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get('#email').type('test@gmail.com')
    cy.get('#phone').type('1234567890')
    cy.get('#company').type('Test Inc.')
    cy.get('#jobtitle').type('Tester')
    cy.get('#message').type('This is a test!')

    cy.contains('button', 'Submit').click()

    cy.get('#main_rain_contact > div > div > p')
      .should('be.visible')
      .and('contain.text', 'Thanks for submitting the form. A Rain representative will be in touch shortly.')
  });

});
