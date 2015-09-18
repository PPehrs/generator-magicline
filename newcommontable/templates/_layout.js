define([
		'marionette',
		'application',
		'text!../templates/<%= template %>.html',
		'./<%= collview %>',
		'../models/<%= coll %>'
	],
	function(Marionette, App, Template, CommonTableView, Collection) {
		'use strict';
		return Marionette.LayoutView.extend({

            /*
             * View Options
             */
			collection: new Collection(),
			template: _.template(Template),
			regions: {
				TabeleRegion: '#ml__<%= name %>__region_table'
			},

            /*
             * Lifecycle functions
             */
			onShow: function() {
				this.TableRegion.show(new CommonTableView({
					collection: this.collection
				}));
			}
		});
	}
);