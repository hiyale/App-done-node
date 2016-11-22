import { AppDone1Page } from './app.po';

describe('app-done1 App', function() {
  let page: AppDone1Page;

  beforeEach(() => {
    page = new AppDone1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
