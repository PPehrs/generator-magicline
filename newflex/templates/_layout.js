define([
		'marionette',
		'application',
		'text!../templates/<%= template %>.html',
		'./<%= collview %>',
		'../models/<%= coll %>'
	],
	function(Marionette, App, Template, ListView, Collection) {
		'use strict';
		return Marionette.LayoutView.extend({

            /*
             * View Options
             */
			collection: new Collection(),
			template: _.template(Template),
			regions: {
				ListRegion: '#ml__<%= name %>__region_list'
			},

            /*
             * Lifecycle functions
             */
			onShow: function() {
				this.ListRegion.show(new ListView({
					collection: this.collection
				}));
			}
		});
	}
);