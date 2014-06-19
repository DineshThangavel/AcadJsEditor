'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * SourceCode Schema
 */
var SourceCodeSchema = new Schema({
    
    codeContent: {
        type: String
    }

});

/**
 * Validations
 */


mongoose.model('SourceCode', SourceCodeSchema);