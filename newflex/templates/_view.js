define([
		'marionette',
		'application',
		'commons/commons_package',
		'text!../templates/<%= template %>.html'
	],
	function(Marionette, App, Commons, Template) {
		'use strict';
		return Commons.FlexGridItem.extend({

            /*
             * View Options
             */

			template: _.template(Template),
			ui: {},

            /*
             * Lifecycle functions
             */
			onShow: function() {}
		});
	}
);