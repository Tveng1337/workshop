module.exports = {
  'Log in': (client) => {
    const loginPage = client.page.login();
    const instancesPage = client.page.instancesPage();
 
    loginPage
        .navigate()
        .login(process.env.USERNAME, process.env.PASSWORD);
 
    instancesPage.expect.element('');
    client.end();
  }
};