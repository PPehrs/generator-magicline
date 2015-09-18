define([
		'marionette',
		'application',
		'commons/commons_package'
		'./<%= view %>'
	],
	function(Marionette, App, Commons, ItemView) {
		'use strict';
		return Commons.FlexGrid.extend({

            /*
             * View Options
             */
			childView: ItemView,

			headerAttributes: [{
				key:   '...',
				title: '...'
			}, {
				key:   '...',
				title: '...'
			}, {
				//key:   '...',
				title: '...'
			}]

		});
	}
);