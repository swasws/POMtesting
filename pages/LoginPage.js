class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[type="email"]'; // Селектор для поля ввода email
    this.passwordInput = 'input[type="password"]'; // Селектор для поля ввода пароля
    this.loginButton = 'button[type="submit"]'; // Селектор для кнопки отправки
  }

  async login(email, password) {
    await page.waitForSelector('input[type="email"]', { timeout: 60000 }); // Явное ожидание для email
    await page.fill('input[type="email"]', email);
    await page.fill('input[type="password"]', password);
    await page.click('button[type="submit"]');

  }
}

module.exports = LoginPage;
