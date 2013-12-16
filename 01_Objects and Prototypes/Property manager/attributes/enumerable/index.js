var car = {};
Object.defineProperty(car, 'doors', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});
Object.defineProperty(car, 'wheels', {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 4
});
Object.defineProperty(car, 'secretTrackingDeviceEnabled', {
  enumerable: false,
  value: true
});