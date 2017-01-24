import { A2TestingPage } from './app.po';

describe('a2-testing App', function() {
  let page: A2TestingPage;

  beforeEach(() => {
    page = new A2TestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
