import { MarcotestPage } from './app.po';

describe('marcotest App', function() {
  let page: MarcotestPage;

  beforeEach(() => {
    page = new MarcotestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
