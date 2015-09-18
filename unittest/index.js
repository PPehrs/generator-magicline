'use strict';
var yeoman = require('yeoman-generator');
var util = require('util');
var path = require('path');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

	method1: function () {
		console.log('\n\nwelcome to magicline\n\n');
	},

	promptTask: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'Module Path (e.g. customerManagement/codes)',
		}, function (answers) {
		  this.modulePath =  answers.name;
		  this.fullModulePath = "scripts/main/modules/" + answers.name + "/views";
		  done();
		}.bind(this));
	},

	promptTask2: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'Class Name (e.g. codes_edit_view)',
		}, function (answers) {
		  done();
		  this.className = answers.name;
		  this.classFileName = answers.name + ".js";
		}.bind(this));
	},

	promptTask3: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'Hit any key to generate the test',
		}, function (answers) {
		  done();
		  this.log("-- GENERATING TEST")
		}.bind(this));
	},

	generateTest: function(){
	    var menu = this.read("basicUnitTest.js");
	 	var camelCaseClassName = (this.className||'').replace(/(\b|_)\w/g, function(m) {
	    	return m.toUpperCase().replace(/_/,'');
	  	});

        var context = {
        	filename: "modules/" + this.modulePath + "/views/" + this.className,
            name: camelCaseClassName
        };
	   
        var link = this.engine(menu, context);
        this.log(link);
	 
	    this.write("scripts/test/unit/" + this.modulePath + "/" + this.className + "_test.js", link);
	},

});