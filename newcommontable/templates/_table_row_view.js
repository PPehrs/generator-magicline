define([
	'underscore',
	'marionette',
	'application',
	'commons/commons_package',
	'modules/authentication/authentication',
	'text!../templates/<%= template %>.html',
	'i18n_manager'
], function(
	_,
	Marionette, 
	App, 
	Commons,
	Auth,	
	Template,
	i18n) {
	
	'use strict';
	
	return Commons.CommonTableRow.extend({

		/**
		 * View Options
		 */

		template: _.template(Template),
		
		ui: {
			label: '.label'
		},
		
		/**
		 * Lifecycle functions
		 */		
		 
		onRender: function () {
			Commons.CommonTableRow.prototype.onRender.apply(this);
			this.ui.label.css('background-color', '#F5F6CE');
		},		 
		
		/**
		 * Public functions
		 */

		getDropDownItems: function () {
			var dropDownItems = [];

			if (true) { //Auth.hasPermission(Auth.SETTING_TRAINING_GOAL_MODIFY)) {

				dropDownItems.push({
					action: '_onClickEdit',
					label: i18n.l('edit')
				});

				dropDownItems.push({
					action: '_onClickDelete',
					label: i18n.l('remove')
				});

				dropDownItems.push({
					divider: true
				});

				if (this.model.get('active')) {
					dropDownItems.push({
						action: '_onClickDeactivate',
						label: i18n.l('deactivate')
					});
				} else {
					dropDownItems.push({
						action: '_onClickActivate',
						label: i18n.l('activate')
					});
				}
			}

			return dropDownItems;
		},		
		
		/**
		 * Private methods
		 */

		_onClickEdit: function () {
			new Commons.ModalDialog({
				title: i18n.l('edit'),
				ViewClass: EditView,
				model: this.model.clone(),
				ActionClass: TrainingGoalSaveAction
			}).openModal();
		},

		_onClickDelete: function () {
			var msg = i18n.l('remove.question', {
				a: '<strong>' + this.model.get('name') + '</strong>'
			});

			var template = _.template(msg);

			this._showConfirmationDialogDialog(
				i18n.l('remove'),
				_.template(msg),
				i18n.l('commons.remove'),
				DeleteAction,
				this.model.clone()
			);
		},

		_onClickActivate: function () {
			var clonedModel = this.model.clone();
			var msg = i18n.l('activate.question', {
				a: '<strong>' + clonedModel.get('name') + '</strong>'
			});

			clonedModel.set('active', true);
			
			new Commons.ConfirmationDialog({
				title: i18n.l('activate'),
				confirmationMessage: _.template(msg),
				confirmationLabel: i18n.l('commons.activate'),
				ActionClass: SaveAction,
				model: clonedModel
			}).openModal();
		},

		_onClickDeactivate: function () {
			var clonedModel = this.model.clone();
			var msg = i18n.l('deactivate.question', {
				a: '<strong>' + clonedModel.get('name') + '</strong>'
			});

			clonedModel.set('active', false);
			
			new Commons.ConfirmationDialog({
				title: i18n.l('deactivate'),
				confirmationMessage: _.template(msg),
				confirmationLabel: i18n.l('commons.deactivate'),
				ActionClass: SaveAction,
				model: clonedModel
			}).openModal();
		}
		
	});
});