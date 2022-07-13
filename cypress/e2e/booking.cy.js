///<reference types="Cypress" /> 
describe('Pruebas a API de Booking', () => {
  it('Metodo GET', () => {
    cy.request('https://restful-booker.herokuapp.com/booking/672')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('firstname', 'Jim');
      console.log(response);
    })
  })
})