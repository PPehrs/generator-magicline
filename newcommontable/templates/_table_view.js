define([
	'marionette',
	'application',
	'commons/commons_package',
	'./<%= view %>'
], function(Marionette, App, Commons, ChildView) {
	'use strict';
	return Commons.CommonTable.extend({

		/*
		 * View Options
		 */
		childView: ChildView,

		headerAttributes: [{
			key:   '...',
			title: '...'
		}, {
			key:   '...',
			title: '...'
		}, {
			key:   'status',
			title: 'commons.status'
		}],
		
		noDataMessage: 'empty'

	});
		
});