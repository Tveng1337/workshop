const loginCommands = {
  login(email, pass) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton')
  }
};
 
module.exports = {
  url: 'https://dev.writedom.com/dashboard',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=email]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: '.signin-button'
    }
  }
};