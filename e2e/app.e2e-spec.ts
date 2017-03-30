import { Angular2heroesPage } from './app.po';

describe('angular2heroes App', () => {
  let page: Angular2heroesPage;

  beforeEach(() => {
    page = new Angular2heroesPage();
  });

  it('should display message saying Tour of Heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
