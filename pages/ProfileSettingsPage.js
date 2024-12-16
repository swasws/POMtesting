const path = require('path'); // Подключаем модуль для работы с путями

class ProfileSettingsPage {
  constructor(page) {
    this.page = page;

    // Селекторы
    this.avatarUploadButton = 'input[type="file"]'; // Селектор для загрузки аватарки
    this.deleteAvatarButton = 'button'; // Селектор для удаления аватарки
    this.nameInput = 'div.LFInput__wrapper > input'; // Селектор для имени
    this.descriptionEditor = 'div.tiptap-text-editor-container > div > div'; // Селектор для описания
    this.saveButton = 'div.css-15yflhy > button'; // Селектор кнопки "Сохранить"
  }

  async uploadAvatar() {
    const avatarPath = path.resolve(__dirname, '../assets/avatar.jpg'); // Абсолютный путь к файлу
    await this.page.setInputFiles(this.avatarUploadButton, avatarPath); // Загрузка аватарки
  }

  async deleteAvatar() {
    await this.page.click(this.deleteAvatarButton); // Удаление аватарки
  }

  async changeName(newName) {
    await this.page.fill(this.nameInput, newName); // Изменение имени
  }

  async changeDescription(newDescription) {
    await this.page.fill(this.descriptionEditor, newDescription); // Изменение описания
  }

  async saveChanges() {
    await this.page.click(this.saveButton); // Сохранение изменений
  }
}

module.exports = ProfileSettingsPage;
