'use strict';
var yeoman = require('yeoman-generator');
var util = require('util');
var path = require('path');
var chalk = require('chalk');

function subFolders (s, f) {
	//s.log(f)
	var files = s.expand(f + "/*");
	for (var i = 0; i < files.length; i++) {
		if(files[i].indexOf('.') == -1) {
				subFolders(s, files[i]);
		} else if(files[i].indexOf('.js') > -1) {
				generateTest(s, files[i]);
		}
	}
}

function generateTest(s, pathX){
	var isView = false;
    var menu = s.read("basicUnitTest.js");
    var fileName = pathX.split('\\').pop().split('/').pop();
    var className = fileName.replace('.js', '');
    var classNameShort = '';
    
    if(className.indexOf('_model') > -1) {
    	classNameShort = className.replace('_model', '');
    	menu = s.read("modelUnitTest.js");
    } else if(className.indexOf('_view') > -1) {
    	classNameShort = className.replace('_view', '');
    	menu = s.read("viewUnitTest.js");
    	isView = true;
    } else if(className.indexOf('_package') > -1) {
    	classNameShort = className.replace('_package', '');
    	menu = s.read("packageUnitTest.js");
    } else if(className.indexOf('_collection') > -1) {
    	classNameShort = className.replace('_collection', '');
    	menu = s.read("collectionUnitTest.js");
    } else if(className.indexOf('_layout') > -1) {
    	classNameShort = className.replace('_layout', '');
    	menu = s.read("layoutUnitTest.js");
    } else if(className.indexOf('_enum') > -1) {
    	classNameShort = className.replace('_enum', '');
    	menu = s.read("enumUnitTest.js");
    } else if(className.indexOf('_action') > -1) {
    	//basic
    } else if(className.indexOf('_store') > -1) {
    	//basic
    } else {
    	classNameShort = className;
		fixedFileName += '_view';
		className += '_view';
    	menu = s.read("viewUnitTest.js");
    	isView = true;		
	}


    var className = className.replace('.', '_');
 	var camelCaseClassName = (className||'').replace(/(\b|_)\w/g, function(m) {
    	return m.toUpperCase().replace(/_/,'');
  	});

  	//s.log(">>>", camelCaseClassName);
  	pathX = pathX.replace(fileName, '');
  	var subfolderPath = pathX.replace('scripts/main/', '');
  	var fixedFileName = fileName.replace('.js', '');

    var context = {
    	filename: subfolderPath + fixedFileName,
        name: camelCaseClassName
    };

    if(isView) {
    	var fileNameModel = fixedFileName.replace('view', 'model');
    	var modelName =  camelCaseClassName.replace('View', 'Model');  	
		context = {
    		filename:  subfolderPath + fixedFileName,
    		filename_model: subfolderPath.replace('view', 'model') + fixedFileName.replace('view', 'model'),
        	name: camelCaseClassName,
        	model: modelName,
        	name_short: classNameShort
    	};    	
    }
   
    var link = s.engine(menu, context);

    var testFileName = "scripts/test/unit/" + subfolderPath + className + "_test.js";
 	//s.log(testFileName);
 	var shouldWriteFile = true;
 	try {
 		var filepath = path.join(s.destinationRoot(), testFileName);
 		var data = s.read(filepath);
 		if(data) {
			shouldWriteFile = false;
		}
 	} catch(e) {
 	}

 	if(shouldWriteFile) {
 		s.write(testFileName, link);
 	}

}


module.exports = yeoman.generators.Base.extend({

	method1: function () {
		console.log('\n\nwelcome to magicline\n\n');
	},


	promptTask1: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'enter modulename',
		}, function (answers) {
		  done();
		  this.moduleName = answers.name;
		}.bind(this));
	},
	
	promptTask2: function () {
		var done = this.async();
		this.prompt({
		  type    : 'input',
		  name    : 'name',
		  message : 'enter submodulename',
		}, function (answers) {
		  done();
		  this.packageName = answers.name;
		}.bind(this));
	},	

	generateTest: function(){
		var modulesPath = "scripts/main/modules/";
		if(this.moduleName && this.moduleName.length > 0) {
			modulesPath += this.moduleName + "/";
		}
		if(this.packageName && this.packageName.length > 0) {
			modulesPath += this.packageName + "/";
		}		
		console.log(modulesPath);
		subFolders(this, subFolders(this, modulesPath));
	},

});