import RegexpUtil from '../RegexpUtils';

const queries = [{
  key: '^',
  value: '^test213',
}, {
  key: '$',
  value: 'blabla16$',
}, {
  key: '.',
  value: '.*',
}, {
  key: '()',
  value: 'and(more)',
}, {
  key: '+',
  value: 'plus+',
}, {
  key: '?',
  value: 'jsx?',
}];

describe('verify escape function for regexp', () => {
  queries.forEach((query) => {
    it(`escape ${query.key} sign`, () => {
      const regexp = new RegExp(RegexpUtil.escape(query.label), 'ig');

      expect(regexp.test(query.label)).toBeTruthy();
    });
  });
});
