'use strict';
var yeoman = require('yeoman-generator');
var util = require('util');
var path = require('path');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

	method1: function() {
		console.log('\n\nwelcome to magicline\n\n');
	},


	promptTask1: function() {
		var done = this.async();
		this.prompt({
			type: 'input',
			name: 'name',
			message: 'module',
		}, function(answers) {
			done();
			this.module = answers.name;
		}.bind(this));
	},

	promptTask3: function() {
		var done = this.async();
		this.prompt({
			type: 'input',
			name: 'name',
			message: 'the new compositeview name',
		}, function(answers) {
			done();
			this.package = answers.name;
		}.bind(this));
	},

	generatePackage: function() {

		var fullPackagePath = "scripts/main/modules/" + this.module;
		var packagePath = "modules/" + this.module;


		var modelTmpl = this.read("_model.js");
		this.write(fullPackagePath + "/models/" + this.package + "_item_model.js", modelTmpl);

		var collContextView = {
			modelPath: packagePath + '/models/',
			model: this.package + "_item_model"
		};

		var collTmpl = this.read("_coll.js");
		var collLink = this.engine(collTmpl, collContextView);
		this.write(fullPackagePath + "/models/" + this.package + "_list_collection.js", collLink);

		//---------

		//*** collection
		var contextViewColl = {
			viewPath: packagePath + '/views/',
			view: this.package + '_table_row_view',
			modelPath: packagePath + '/models/',
			coll: this.package + "_list_collection"
		};

		var collViewTmpl = this.read("_table_view.js");
		var collViewLink = this.engine(collViewTmpl, contextViewColl);
		this.write(fullPackagePath + "/views/" + this.package + "_table_view.js", collViewLink);

		//*** itemview
		var contextView = {
			templatePath: packagePath + '/templates/',
			template: this.package + '_table_row',
		};

		var viewTmpl = this.read("_table_row_view.js");
		var viewLink = this.engine(viewTmpl, contextView);
		this.write(fullPackagePath + "/views/" + this.package + "_table_row_view.js", viewLink);

		//*** layout
		var contextLayout = {
			templatePath: packagePath + '/templates/',
			template: this.package + '_layout',
			viewPath: packagePath + '/views/',
			collview: this.package + '_table_view',
			coll: this.package + "_list_collection",
			name: this.package
		};

		var layTmpl = this.read("_layout.js");
		var layLink = this.engine(layTmpl, contextLayout);
		this.write(fullPackagePath + "/views/" + this.package + "_layout.js", layLink);

		//---------		

		var contextTmpl = {
			namespace: ("ml__" + this.module + "__" + this.package + "__content").toLowerCase(),
			name: this.package
		};

		var templateTmpl = this.read("_table_row.html");
		var templateLink = this.engine(templateTmpl, contextTmpl);
		this.write(fullPackagePath + "/templates/" + this.package + "_table_row.html", templateLink);

		templateTmpl = this.read("_layout_template.html");
		templateLink = this.engine(templateTmpl, contextTmpl);
		this.write(fullPackagePath + "/templates/" + this.package + "_layout.html", templateLink);

	}

});