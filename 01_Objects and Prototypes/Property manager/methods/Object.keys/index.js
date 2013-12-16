/**
 * Created by amischol on 15/12/13.
 */
var box = Object.create({}, {
  openLid: {
    value: function(){
      return 'nothing';
    },
    enumerable: true
  },
  openSecretCompartment: {
    value: function(){
      return 'treasure';
    },
    enumerable: false
  }
});
