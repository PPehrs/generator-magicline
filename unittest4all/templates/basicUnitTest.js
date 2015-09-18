define(
	['<%= filename %>'],
	function(<%= name %>) {
		'use strict';

		describe('<%= name %>:', function() {
			it('Hello from <%= name %>', function() {
				var basic = new <%= name %>();
				basic.should.be.an('object');
			});
		});

	}
);