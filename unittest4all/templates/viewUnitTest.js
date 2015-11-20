define([
	'chai',
	'sinon',
	'/scripts/test/unit/helper/view_tester.js',
	'<%= filename %>',
	'<%= filename_model %>'
], function(
	chai,
	sinon,
	ViewTester, 
	<%= name %>, 
	<%= model %>) {
	'use strict';
	
	var assert = chai.assert;
	var viewTester = null;
	
	describe('<%= name %>', function() {
		viewTester = new ViewTester({
			View: <%= name %>,
			Model: <%= model %>,
			data: {
				
			},
			/*expectedText: {
				'#ml-?': '?',
			}*/
			/*expectedInput: {

			}*/
		});

		viewTester.test();
		//viewTester.callEventsTest();
	});
});