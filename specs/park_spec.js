var assert = require( "assert" );
var Park = require( "../park.js" );
var Dinosaur = require( "../dinosaur.js" )

describe( "Park", function(){

  var jPark;
  var mike;
  var angelo;
  var sally;
  var joebob;

  beforeEach( function(){
    jPark = new Park();
    mike = new Dinosaur( "T-Rex", 2 );
    angelo = new Dinosaur( "T-Rex", 3 );
    sally = new Dinosaur( "Velociraptor", 4 );
    joebob = new Dinosaur( "Diplodicus", 6 );
  })

  it( "should have an empty enclosure on creation", function(){
    assert.strictEqual( jPark.enclosure.length, 0 );
  })

  it( "should be able to add a dinosaur", function(){
    jPark.addDinosaur( mike );
    console.log( jPark );
    assert.strictEqual( jPark.enclosure.length, 1 );
  })

  it( "should be able to remove all dinosaurs of a particular type", function(){
    jPark.addDinosaur( mike );
    jPark.addDinosaur( angelo );
    jPark.addDinosaur( sally );
    jPark.addDinosaur( joebob );
    jPark.removeAll( "T-Rex" );
    console.log( jPark );
    assert.strictEqual( jPark.enclosure.length, 2 );
  })

  it( "should be able to list all dinosaurs with a birth rate above a given threshold", function(){
    jPark.addDinosaur( mike );
    jPark.addDinosaur( angelo );
    jPark.addDinosaur( sally );
    jPark.addDinosaur( joebob );
    var found = jPark.getAllRateAbove( 2 );
    assert.strictEqual( found[0], angelo );
    assert.strictEqual( found[1], sally );
    assert.strictEqual( found[2], joebob );
  })

  it( "Should be able to calculate popn after 1 year, 1 dino", function(){
    jPark.addDinosaur( mike );
    var popn = jPark.getPopnByYear( 1 );
    assert.strictEqual( popn, 3 );
  })

  it( "Should be able to calculate popn after 2 years, 1 dino", function(){
    jPark.addDinosaur( mike );
    var popn = jPark.getPopnByYear( 2 );
    assert.strictEqual( popn, 5 );
  })

  it( "Should be able to calculate popn after 2 years, 1 dino", function(){
    jPark.addDinosaur( mike );
    jPark.addDinosaur( angelo );
    var popn = jPark.getPopnByYear( 2 );
    assert.strictEqual( popn, 12 );
  })

});