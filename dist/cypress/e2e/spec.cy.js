"use strict";
const url = "http://127.0.0.1:5500/?#8044ca";
const color = url.replace("http://127.0.0.1:5500/?", "");
describe("empty spec", () => {
    it("should visit", () => {
        cy.visit(url);
    });
    it("should like, dislike color and close popup", () => {
        cy.get("#fav").click();
        cy.get("#favlist").click();
        cy.get(".fa-sm").click({ force: true });
        cy.get("#closeShortcuts").click();
    });
    it("should get random color and back to previous color using history list", () => {
        cy.get("#refresh").click();
        cy.get("#hbutton").click();
        cy.contains("span", color).click();
        cy.get("#closeHistory").click();
    });
    it("should change theme color, get random color, add to favs, get another random color and back to previous using favs list", () => {
        cy.get("#dark-mode-toggle").click();
        cy.get("#refresh").click();
        cy.get("#fav").click();
        cy.get("#refresh").click();
        cy.get("#favlist").click();
        cy.get("#favsli").click();
    });
    it("should change theme color, copy text to clipboard and close alert", () => {
        cy.get("#dark-mode-toggle").click();
        cy.get("#copy").click();
        cy.get("#closeAlert").click();
    });
    // it("should back to previous color using arrows and get more info", () => {
    //   cy.get("#back").click();
    //   cy.get("#moreinfo").click();
    // });
});
