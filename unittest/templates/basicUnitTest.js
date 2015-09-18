define(
	['<%= filename %>'],
	function(<%= name %>) {
		'use strict';

		describe('<%= name %>', function() {
			it('<%= name %> say hello', function() {
				test.expect(<%= name %>).to.exist;
			});
		});

	}
);