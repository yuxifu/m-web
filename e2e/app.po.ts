import { browser, element, by } from 'protractor';

export class Angular2heroesPage {
  navigateTo() {
    return browser.get('/heroes/dashboard');
  }

  getParagraphText() {
    return element(by.css('app-heroes-panel h1')).getText();
  }
}
