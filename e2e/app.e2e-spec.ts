import { MikhailLeviAdminPage } from './app.po';

describe('mikhail-levi-admin App', () => {
  let page: MikhailLeviAdminPage;

  beforeEach(() => {
    page = new MikhailLeviAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
