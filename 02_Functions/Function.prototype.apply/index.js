var friend = {
  warmth: 0,
  useSweater: function( level ){
    this.warmth = level;
  }
};
var me = {
  warmth: 0,
  isWarm: function() {
    return this.warmth === 100;
  }
};