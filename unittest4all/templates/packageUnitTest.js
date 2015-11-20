define([
	'/scripts/test/unit/helper/package_tester.js',
	'<%= filename %>'
], function(
	PackageTester, 
	<%= name %>
){
	'use strict';
		describe('<%= name %>', function() {

			describe('Basic Tests', function() {
				var packageTester = new PackageTester({
					PackageClass: <%= name %>,
					views: ['View'],
					models: ['Model']
				});
				packageTester.test();
			});
		});
});