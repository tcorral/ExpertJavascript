var year = {};
(function(){
  var month = '';
  Object.defineProperty( year,  'month', {
    configurable: true,
    enumerable: true,
    get: function()
    {
      return month;
    },
    set: function( value ){
      value = value.toLowerCase().substr(0, 3);
      month = (['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].filter(function( val, index, arr ){
        return value === val;
      }))[0];
    }
  });
}());