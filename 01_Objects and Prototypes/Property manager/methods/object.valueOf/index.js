var Car = function(name){
  this.name = name;
};
var tesla = Object.create(Car.prototype, {
  name: {
    value: 'tesla'
  }
});