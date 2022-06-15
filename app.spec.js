const it = require('./framework').it;
const expect = require('./framework').expect;
const saludar = require('./app');

console.log(saludar('Platzi'));

it('La función saluda', () => {
  expect(saludar('Platzi')).toBe('Hola Platzi');
});