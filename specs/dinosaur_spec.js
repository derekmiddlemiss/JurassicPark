var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe( "Dinosaur", function(){

  var tRex;

  beforeEach( function(){
    tRex = new Dinosaur( "T-Rex", 2 );
  });

  it( "should have a type 'T-Rex'", function(){
    assert.strictEqual( tRex.type, "T-Rex" );
  });

  it( "should have an offspringRate of 2", function(){
    assert.strictEqual( tRex.offspringRate, 2 );
  });

});