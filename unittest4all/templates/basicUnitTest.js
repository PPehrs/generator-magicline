define([
	'chai',
	'sinon',
	'<%= filename %>'
], function(
	chai,
	sinon,
	<%= name %>
){
	'use strict';
	
	var assert = chai.assert;

	describe('<%= name %>:', function() {
		it('Hello from <%= name %>', function() {
			var basic = new <%= name %>();
			basic.should.be.an('object');
		});
	});
});