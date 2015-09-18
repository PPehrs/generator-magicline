define([
		'marionette',
		'application',
		'text!<%= templatePath %><%= template %>.html'
	],
	function(Marionette, App, Template) {
		'use strict';
		return Marionette.ItemView.extend({

            /*
             * View Options
             */

            // View beschreibende Optionen
			tagName: 'tr',

            // View erweiternde Optionen
			template: _.template(Template),
			ui: {},

            /*
             * Lifecycle functions
             */
            onShow: function() {}
		});
	}
);