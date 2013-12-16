var car = {};
Object.defineProperty(car, 'doors', {
  configurable: true,
  value: 4
});
Object.defineProperty(car, 'wheels', {
  configurable: false,
  value: 4
});