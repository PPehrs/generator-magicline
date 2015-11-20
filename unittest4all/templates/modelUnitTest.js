define([
	'chai',
	'sinon',
	'/scripts/test/unit/helper/model_tester.js',
	'<%= filename %>'
], function(
	chai,
	sinon,
	ModelTester, 
	<%= name %>
){
	'use strict';
	var assert = chai.assert;
	
	describe('<%= name %>', function() {

		var modelTester = null;

		describe('Base Tests', function() {
			modelTester = new ModelTester({
				model: new <%= name %>(),
				expectedDefaults: {
				},
				expectedUrl: '' //e.g.: '/customer/accounting/'
			});
			modelTester.test();
		});

		describe('Advanced Tests', function() {
			it('has URL with ID', function() {
				modelTester.reset();
				modelTester.setModelValue('databaseId', 1);
				//modelTester.testUrlWithPattern('/customer/accounting/1');
			});
		});

	});
});