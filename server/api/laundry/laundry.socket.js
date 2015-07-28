/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Laundry = require('./laundry.model');

exports.register = function(socket) {
  Laundry.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Laundry.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('laundry:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('laundry:remove', doc);
}