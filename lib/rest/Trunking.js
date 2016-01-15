'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./trunking/V1');


/**
 * Initialize trunking domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns trunking domain
 */
function Trunking(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://trunking.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Trunking.prototype, Domain.prototype);
Trunking.prototype.constructor = Trunking;

Object.defineProperty(Trunking.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Trunking.prototype,
  'trunks', {
  get: function() {
    return this.v1.trunks;
  },
});

module.exports = Trunking;