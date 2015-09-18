define([
		'marionette',
		'application',
		'commons/commons_package',
		'./<%= view %>'
	],
	function(Marionette, App, Commons, ChildView) {
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
				//key:   '...',
				title: '...'
			}],
			
			/*
			 * Lifecycle functions
			 */
			initialize: function () {
				this.loaderOptions = {
					type: 'spinner',
					container: '.scrollable-content'
				};
			}			

		});
	}
);