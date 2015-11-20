define([
	'/scripts/test/unit/helper/collection_tester.js',
	'<%= filename %>'
], function(
	CollectionTester, 
	<%= name %>
){
	'use strict';
	describe('<%= name %>', function() {

		var collectionTester = null;

		describe('Base Tests', function() {
			collectionTester = new CollectionTester({
				CollectionClass:  <%= name %>
			});
			collectionTester.test();
		});
	});
});