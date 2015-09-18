define([
	'<%= filename %>',
	'<%= filename_model %>'],
	function(<%= name %>, <%= model %>) {
		'use strict';
		describe('<%= name %>', function() {
			
			before(function() {
				this.$fixture = $('<div id="<%= name_short %>-view-fixture"></div>');
			});

			beforeEach(function() {
				this.$fixture.empty().appendTo($('#fixtures'));
				this.view = new <%= name %>({
					el: this.$fixture,
					model: new <%= model %>()
				});
				this.view.should.be.an('object');
			});

			afterEach(function() {
				this.view.model.destroy();
			});

			after(function() {
				$('#fixtures').empty();
			});

			it('can render an empty Model', function() {
				this.view.render();
				//data action
			});

			it('can render an Data Model', function() {
				this.view.model = new <%= model %>({
					//data action
				});
				this.view.model.should.be.an('object');
				this.view.render();
				//data action
			});

		});
	}
);