describe("shadow_root_user_agent", () => {
  it("access_to_pseudo_elements", () => {
    // visit google player site
    cy.visit("https://googleads.github.io/googleads-ima-html5/vsi/");
    // get a pseudo element inside a shadow-root (user-agent)
    cy.get("#h5-player")
      .shadow()
      .find('div[pseudo="-webkit-media-controls"]')
      .should("exist");
  });
});
