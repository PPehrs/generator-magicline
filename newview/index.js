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
		  message : 'the new view name',
		}, function (answers) {
		  done();
		  this.package =  answers.name;
		}.bind(this));
	},	

	generatePackage: function(){

		var fullPackagePath = "scripts/main/modules/" + this.module;
		var packagePath = "modules/" + this.module;
	 

		var modelTmpl = this.read("_model.js");
		this.write(fullPackagePath + "/models/" + this.package + "_model.js", modelTmpl);

    	var contextView = {
    		templatePath: packagePath + '/templates/',
        	template: this.package + '_template',
    	};

    	var viewTmpl = this.read("_view.js");
    	var viewLink = this.engine(viewTmpl, contextView);
		this.write(fullPackagePath + "/views/" + this.package + "_view.js", viewLink);
		
		var contextTmpl = {
    		namespace: ("ml__" + this.module + "__" + this.package + "__content").toLowerCase()
    	};

    	var templateTmpl = this.read("_template.html");
    	var templateLink = this.engine(templateTmpl, contextTmpl);
		this.write(fullPackagePath + "/templates/" + this.package + "_template.html", templateLink);

	}

});