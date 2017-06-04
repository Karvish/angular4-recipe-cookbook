import { Angular4RecipeCookbookPage } from './app.po';

describe('angular4-recipe-cookbook App', () => {
  let page: Angular4RecipeCookbookPage;

  beforeEach(() => {
    page = new Angular4RecipeCookbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
