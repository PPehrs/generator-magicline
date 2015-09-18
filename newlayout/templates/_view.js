define([
		'marionette',
		'application',
		'text!<%= templatePath %><%= template %>.html'
	],
	function(Marionette, App, Template) {
		'use strict';
		return Marionette.LayoutView.extend({

            /*
             * View Options
             */

            // View erweiternde Optionen
			regions: {},
			ui: {},

            template: _.template(Template),

            /*
             * Lifecycle functions
             */
			onShow: function() {}
		});
	}
);