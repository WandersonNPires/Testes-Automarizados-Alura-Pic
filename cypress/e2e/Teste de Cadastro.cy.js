describe('Pagina de  Cadastro', () => {
  it('Realizar preenchimento para cadastro de novo usuario', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    
    cy.get('input[formcontrolname="email"]').type('wandersonneiva@gmail.com');
    cy.get('input[formcontrolname="fullName"]').type('Wanderson Neiva');
    cy.get('input[formcontrolname="userName"]').type('junior');
    cy.get('input[formcontrolname="password"]').type('Testando');
    cy.contains('button', 'Register').click();
  })
})