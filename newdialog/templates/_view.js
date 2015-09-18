define([
		'marionette',
		'application',
		'commons/commons_package',
		'text!<%= templatePath %><%= template %>.html'
	],
	function(Marionette, App, Commons, FormView, Template) {
		'use strict';
		return FormView.extend({

            /*
             * View Options
             */

            // View erweiternde Optionen
			bindings: {
			},

			ui: {},

            template: _.template(Template),

            /*
             * Lifecycle functions
             */
			onShow: function() {
				this._createFormControls();
			},

            /*
             * Private functions
             */
			_createFormControls: function() {
				//kendo.culture('de-DE');
			}
		});
	}
);