import { RtblPage } from './app.po';

describe('rtbl App', () => {
  let page: RtblPage;

  beforeEach(() => {
    page = new RtblPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
