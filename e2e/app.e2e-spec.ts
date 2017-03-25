import { NgContactsPage } from './app.po';

describe('ng-contacts App', function() {
  let page: NgContactsPage;

  beforeEach(() => {
    page = new NgContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
