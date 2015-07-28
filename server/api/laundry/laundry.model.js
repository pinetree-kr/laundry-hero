'use strict';

/*
- 세탁기 등록
- 세탁기 정보 변경
- 세탁기 상태 변경(예약중/진행중/사용가능)
- 세탁기 삭제
 */

var mongoose = require('mongoose'),
		moment = require('moment'),
    Schema = mongoose.Schema;

var LaundrySchema = new Schema({
  name: {
  	type: String,
  	required: true
  },
  info: String,
  // 상태정보
  status: {},
  regdate: Number
});

// Validate name is exist
LaundrySchema
  .path('name')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({name: value}, function(err, user) {
      if(err) throw err;
      if(user) {
        if(self.id === user.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'The specified laundry name is already in use.');

/**
 * Pre-save hook
 */
LaundrySchema
  .pre('save', function(next) {
    if (!this.isNew) return next();
    this.regdate = moment().valueOf();
		next();
  });

// check reserved
LaundrySchema
	.virtual('status.reserved')
	.get(function(){
		return this.status.value === 'reserved';
	});
// check running
LaundrySchema
	.virtual('status.running')
	.get(function(){
		return this.status.value === 'running';
	});

/**
 * Static Methods
 */
LaundrySchema.statics = {
	register : function(body, next){
		var model = new this(body);
		return model.save(next);
	},
}

/**
 * Methods
 */
LaundrySchema.methods = {
	reserve : function(user, time){

	},
}
module.exports = mongoose.model('Laundry', LaundrySchema);