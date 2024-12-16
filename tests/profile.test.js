const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProfileSettingsPage = require('../pages/ProfileSettingsPage');

test('Тестирование изменения настроек профиля с авторизацией', async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  const profileSettingsPage = new ProfileSettingsPage(page);

  await page.goto('https://lalafo.kg');
  await page.waitForSelector('input[type="email"]', { timeout: 60000 });

  await loginPage.login('stolomusev@gmail.com', '12345');

  await page.waitForURL('https://lalafo.kg/account/settings');
  expect(await page.title()).toBe('Настройки аккаунта');

  await profileSettingsPage.uploadAvatar();
  await profileSettingsPage.changeName('Новое Имя');
  await profileSettingsPage.changeDescription('Новое описание профиля');
  await profileSettingsPage.saveChanges();

  // Проверка изменения имени
  const nameValue = await page.locator('div.LFInput__wrapper > input').inputValue();
  expect(nameValue).toBe('Новое Имя');
});
