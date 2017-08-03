import { NettasPage } from './app.po';

describe('nettas App', () => {
  let page: NettasPage;

  beforeEach(() => {
    page = new NettasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
