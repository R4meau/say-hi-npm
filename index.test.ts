import sayHiNPM from './index'

describe('sayHiNPM', () => {
  test('should log "hi"', () => {
    console.log = jest.fn();

    sayHiNPM();

    expect(console.log).toHaveBeenCalledWith('hi');
  });
});