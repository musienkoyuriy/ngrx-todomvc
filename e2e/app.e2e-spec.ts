import { RxTodosPage } from './app.po';

describe('rx-todos App', function() {
  let page: RxTodosPage;

  beforeEach(() => {
    page = new RxTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
