define([
		'modules/core/abstract_store'
	],
	function(AbstractStore) {
		'use strict';

		/**
		 * Singleton
		 */
		var Store = AbstractStore.extend({

			/*
			 * Options
			 */

			/**
			 * @override
			 */
			supportedActions: [
			],

			/**
			 * @override
			 */
			events: {
			},

			/*
			 * Public Methods
			 */

			/**
			 * @param action
			 * @override
			 */
			execute: function(action) {
				if (action instanceof Action) {

				}
				else {
					throw new Error('Unsupported Action ' + action);
				}
			},

			/*
			 * Private Methods
			 */
		});

        return new Store();
	}
);
