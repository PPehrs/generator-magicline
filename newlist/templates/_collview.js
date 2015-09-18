define([
		'marionette',
		'application',
		'text!../templates/<%= template %>.html',
		'./<%= view %>',
		'../models/<%= coll %>'
	],
	function(Marionette, App, Template, ItemView, Collection) {
		'use strict';
		return Marionette.CompositeView.extend({

            /*
             * View Options
             */

            // View beschreibende Optionen
			itemView: ItemView,

            // View erweiternde Optionen
			ui: {},
            template: _.template(Template),

            /*
             * Lifecycle functions
             */
			onShow: function() {},

			buildChildView: function(child, ChildViewClass, childViewOptions) {
				var options = _.extend({}, childViewOptions);
				var view = new ItemView(options);
				view.model.set('_view', view);
				return view;
			}
		});
	}
);