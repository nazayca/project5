class PaginationPage {
  getHeader() {
    return cy.get(".is-size-3, #sub_heading");
  }

  getPara() {
    return cy.get("#content");
  }

  getPrvButton() {
    return cy.get("#previous");
  }
  getNextButton() {
    return cy.get("#next");
  }

  getCircle() {
    return cy.get(".circle")
  }

  getCityData() {
    return cy.get('.city_info').parent().children()  
}
getCity(){
    return cy.get('.city_info')
}
getCityPicture(){
    return cy.get('.city_image')
}
getCircle() {
    return cy.get('.circle')
}

  /*Method*/

  getBtn(btn) {
    switch (btn) {
      case "Previous":
        return this.getPrvButton();

      case "Next":
        return this.getNextButton();

      default:
        throw new Error(`Case not found${btn}`);
    }
  }

  getClickBtn(btn) {
    this.getBtn(btn).click();
  }

  
}
module.exports = PaginationPage;
