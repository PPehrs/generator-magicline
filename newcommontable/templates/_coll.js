define([
	'backbone',
	'./<%= model %>'
], function(
	Backbone, 
	ItemModel
) {
		
	'use strict';

	return Backbone.Collection.extend({
		model: ItemModel,
		url: function() {
			return '/';	
		},
		comparator: function (model) {
			return;
		},
	});
});