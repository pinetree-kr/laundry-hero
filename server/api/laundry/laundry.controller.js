'use strict';

var _ = require('lodash');
var Laundry = require('./laundry.model');

// Get list of laundrys
exports.index = function(req, res) {
  Laundry.find(function (err, laundrys) {
    if(err) { return handleError(res, err); }
    return res.json(laundrys);
  });
};

// Get a single laundry
exports.show = function(req, res) {
  Laundry.findById(req.params.id, function (err, laundry) {
    if(err) { return handleError(res, err); }
    if(!laundry) { return res.send(404); }
    return res.json(laundry);
  });
};

// Register a new laundry in the DB.
exports.register = function(req, res){
  if(req.body._id){
    delete req.body._id;
    // TODO : UPDATE req.params.id
  }else{
    Laundry.register(req.body, function(err, laundry){
      if(err) { return handleError(res, err);}
      return res.status(201).json(laundry);
    });
  }
}

// Updates an existing laundry in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Laundry.findById(req.params.id, function (err, laundry) {
    if (err) { return handleError(res, err); }
    if(!laundry) { return res.send(404); }
    var updated = _.merge(laundry, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(laundry);
    });
  });
};

// Deletes a laundry from the DB.
exports.destroy = function(req, res) {
  Laundry.findById(req.params.id, function (err, laundry) {
    if(err) { return handleError(res, err); }
    if(!laundry) { return res.send(404); }
    laundry.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send(204);
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}