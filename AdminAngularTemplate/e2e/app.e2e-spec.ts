import { AdminAngularTemplatePage } from './app.po';

describe('admin-angular-template App', () => {
  let page: AdminAngularTemplatePage;

  beforeEach(() => {
    page = new AdminAngularTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
