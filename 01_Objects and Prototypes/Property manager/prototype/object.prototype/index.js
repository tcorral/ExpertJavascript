var Dog = function(){};
Dog.prototype.speak = function(){
  return "woof";
};
var Cat = function(){};
Cat.prototype.speak = function(){
  return 'meow';
};
var Tabby = function(){};
Tabby.prototype = new Cat();
var tabbyCat = new Tabby();
