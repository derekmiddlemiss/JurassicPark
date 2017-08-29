var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function( dinosaur ){
  this.enclosure.push( dinosaur );
};

Park.prototype.removeAll = function( type ){
  var length = this.enclosure.length;
  for ( var i = length -1 ; i >= 0; i-- ){
    var dinosaur = this.enclosure[ i ];
    if ( dinosaur.type === type ){
      this.enclosure.splice( i, 1 );
    }
  }
};

Park.prototype.getAllRateAbove = function( rate ){
  var found = [];
  for ( dinosaur of this.enclosure ){
    if ( dinosaur.offspringRate > rate ){
      found.push( dinosaur );
    }
  }
  return found
};

Park.prototype.getPopnByYear = function( year ){
  var popn = this.enclosure.length;
  for ( var i = 0; i < year; i++ ){

    for ( dinosaur of this.enclosure ){
      popn += dinosaur.offspringRate;
    }

  }
  return popn
};


module.exports = Park;