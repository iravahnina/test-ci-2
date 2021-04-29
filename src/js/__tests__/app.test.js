import sortingHealth from '../app.js';

test('sorting characters', () => {
  const sorted = sortingHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 80 },
    { name: 'колдун', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'колдун', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sorted).toEqual(expected);
  expect(sorted).not.toBe(expected);
});