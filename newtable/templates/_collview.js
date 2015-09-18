define([
		'marionette',
		'application',
		'commons/views/table_view',
		'text!<%= templatePath %><%= template %>.html',
		'<%= viewPath %><%= view %>',
		'<%= modelPath %><%= coll %>'
	],
	function(Marionette, App, TableView, Template, ItemView, Collection) {
		'use strict';
		return TableView.extend({

            /*
             * View Options
             */
            itemView: ItemView,

            // View erweiternde Optionen
            template: _.template(Template),

            /*
             * Lifecycle functions
             */
			initialize: function() {
				this.collection = new Collection();
			}
		});
	}
);