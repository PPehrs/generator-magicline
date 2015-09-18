define([
	'./views/<%= view %>',
	'./models/<%= model %>'
	],
	function(View, Model) {
		'use strict';
		return {
			View: View,
			Model: Model
		};
	}
);