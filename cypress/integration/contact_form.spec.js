/// <reference types="cypress"/>

describe('contact form', () => {

  it('shows error message when e-mail is invalid', () =>{
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
      .and('contain.text', 'The e-mail address provided is invalid. Please user another e-mail address.')
  });

});
