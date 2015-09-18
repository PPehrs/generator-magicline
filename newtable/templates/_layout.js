define([
		'marionette',
		'application',
		'text!<%= templatePath %><%= template %>.html',
		'<%= viewPath %><%= view %>',
		'<%= viewPath %><%= collview %>'
	],
	function(Marionette, App, Template, HeaderView, TableView) {
		'use strict';
		return Marionette.LayoutView.extend({

            /*
             * View Options
             */

            // View erweiternde Optionen
            template: _.template(Template),
			regions: {
				HeaderRegion: '#ml__<%= name %>__region_header',
				TableRegion: '#ml__<%= name %>__region_table'
			},

            /*
             * Lifecycle functions
             */
			onShow: function() {
				this.HeaderRegion.show(new HeaderView());
				this.TableRegion.show(new TableView());
			}
		});
	}
);