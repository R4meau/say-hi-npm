/* eslint-disable no-undef */
import sayHiNPM from './index'

describe('sayHiNPM', () => {
  test('should log "hi"', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();

    sayHiNPM();

    expect(console.log).toHaveBeenCalledWith('hi');
  });
});
