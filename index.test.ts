import sayHiNPM from './index'

describe('sayHiNPM', () => {
  test('should return "hi"', () => {
    expect(sayHiNPM()).toBe('hi')
  });
});