define([
	'underscore',
	'marionette',
	'application',
	'commons/commons_package',
	'modules/authentication/authentication',
	'text!../templates/<%= template %>.html',
	'./<%= collview %>',
	'../models/<%= coll %>'
], function(
	_,
	Marionette, 
	App,
	Commons,
	Auth,
	Template, 
	CommonTableView, 
	Collection
) {
	
	'use strict';
	
	return Marionette.LayoutView.extend({

		/*
		 * View Options
		 */
		 
		template: _.template(Template),
		regions: {
			TabeleRegion: '#ml__<%= name %>__region_table'
		},

		/*
		 * Lifecycle functions
		 */
		 
		onShow: function() {
			this.TableRegion.show(new CommonTableView({
				collection: new Collection(),
				scrollCollection: new Collection()				
			}));
		},
		
		/*
		 * Private methods
		 */
		 
		_showToolbarItems: function () {
			if (true) { //Auth.hasPermission(Auth.SETTING_TRAINER) && Auth.hasPermission(Auth.SETTING_TRAINING_GOAL_MODIFY)) {

				var toolbarItems = [
					{
						title: i18n.l('...'),
						enabled: true,
						fixed: true,
						icon: 'fa fa-plus',
						callback: this._onClickAdd.bind(this),
						parent: this
					}
				];

				App.vent.trigger('Toolbar:update', toolbarItems);
			}
		},

		_onClickAdd: function () {
			new Commons.ModalDialog({
				title: i18n.l('...'),
				ViewClass: View,
				model: new Model(),
				ActionClass: SaveAction
			}).openModal();
		},
		
	});
});