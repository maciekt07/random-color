"use strict";
var url = "http://127.0.0.1:5500/";
describe("empty spec", function () {
    it("should visit like a first time user", function () {
        cy.clearLocalStorage();
        cy.visit(url);
    });
});
