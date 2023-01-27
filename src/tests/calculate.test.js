import calculate from '../logic/calculate';

const object = {
  total: null,
  next: null,
  operation: null,
};

describe('testing calculate function', () => {
  test('when the button is = ', () => {
    const buttonName = '=';
    const obj = { total: '5587', next: '957', operation: '+' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...object, total: '6544' });
  });
  test('when there is no operation, update next and clear the value', () => {
    const buttonName = '8';
    const obj = { ...object };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ next: '8', total: null });
  });
  test('when user puts an operation after pressing = ', () => {
    const buttonName = '-';
    const obj = { ...object, total: '92' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...object, total: '92', operation: '-' });
  });
});
