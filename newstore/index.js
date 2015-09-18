'use strict';
var yeoman = require('yeoman-generator');
var util = require('util');
var path = require('path');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

	method1: function () {
		console.log('\n\nwelcome to magicline\n\n');
	},


	promptTask1: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'module',
		}, function (answers) {
		  done();
		  this.module =  answers.name;
		}.bind(this));
	},
	
	promptTask3: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'the new store name',
		}, function (answers) {
		  done();
		  this.package =  answers.name;
		}.bind(this));
	},	

	generatePackage: function(){

		var fullPackagePath = "scripts/main/modules/" + this.module;
		var packagePath = "modules/" + this.module;
	 
		var contextView = {
    	};
		
    	var viewTmpl = this.read("_action.js");
    	var viewLink = this.engine(viewTmpl, contextView);
		this.write(fullPackagePath + "/actions/" + this.package + "_action.js", viewLink);
		
    	viewTmpl = this.read("_store.js");
    	viewLink = this.engine(viewTmpl, contextView);
		this.write(fullPackagePath + "/" + this.package + "_store.js", viewLink);

	}

});