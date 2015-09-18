define([
		'marionette',
		'application',
		'text!../templates/<%= template %>.html',
		'./<%= collview %>'
	],
	function(Marionette, App, Template, ListView) {
		'use strict';
		return Marionette.LayoutView.extend({

            /*
             * View Options
             */

            // View erweiternde Optionen
			template: _.template(Template),
			regions: {
				ListRegion: '#ml__<%= name %>__region_list'
			},

            /*
             * Lifecycle functions
             */
			onShow: function() {
				this.ListRegion.show(new ListView());
			}
		});
	}
);