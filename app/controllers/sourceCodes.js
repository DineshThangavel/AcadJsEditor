'use strict';

var mongoose = require('mongoose'),
    SourceCode = mongoose.model('SourceCode'),
    _ = require('lodash');

/**
 * Create a Source Code
 */
exports.create = function(req, res) {
	console.log('Inside create!');
	console.log(req);
    var sourceCode = new SourceCode(req.body);

    sourceCode.save(function(err,sourceCode) {
        if (err) {
            return res.send();
        } else {
        	console.dir(sourceCode);
            res.jsonp(sourceCode);
        }
    });
};


exports.show = function(req, res) {
    console.log('Inside show');
    var idToDisplay = req.params.sourceCodeId;
    SourceCode.findById(idToDisplay,function(err,sourceCode){
        if(err){
            return res.send();
        } else{
            console.log(sourceCode);
            res.jsonp(sourceCode);
        }

    });
};