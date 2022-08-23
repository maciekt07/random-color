const url = "http://127.0.0.1:5500/";
describe("empty spec", () => {
  it("should visit like a first time user", () => {
    cy.clearLocalStorage();
    cy.visit(url);
  });
});
