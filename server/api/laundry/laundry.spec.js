'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var Laundry = require('./laundry.model');

var laundry = new Laundry({
  name: 'Test Laundry',
  info : 'Test information'
});


describe('Laundry Model', function() {
  before(function(done) {
    // Clear users before testing
    Laundry.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Laundry.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no laundries', function(done) {
    Laundry.find({}, function(err, laundries) {
      laundries.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate laundry', function(done) {
    laundry.save(function() {
      var laundryDup = new Laundry(laundry);
      laundryDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving an existed name', function(done) {
    Laundry.register(laundry, function(){
      var laundryDup = new Laundry({name:laundry.name});
      Laundry.register(laundryDup, function(err){
        should.exist(err);
        done();
      });
    })
  });

  it('should fail when saving without a name', function(done) {
    laundry.name = '';
    laundry.save(function(err) {
      should.exist(err);
      done();
    });
  });


});