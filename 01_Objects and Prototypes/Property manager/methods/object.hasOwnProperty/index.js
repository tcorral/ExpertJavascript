/**
 * Created by amischol on 15/12/13.
 */
var foo = {
  foo: 'foo'
};
var bar = Object.create(foo, {
  bar: {
    enumerable: true,
    value: 'bar'
  }
});
