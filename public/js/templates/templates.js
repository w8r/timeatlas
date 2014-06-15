(function() {
  var template = Handlebars.template, templates = tas.Templates = tas.Templates || {};
templates['app.featuresselect'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"btn-group features-select\">\n	<span class=\"btn btn-primary\" data-mode=\"events\">\n		<span class=\"glyphicon glyphicon-flash\"></span>\n	</span>\n	<span class=\"btn btn-primary\" data-mode=\"people\">\n		<span class=\"fui-user\"></span>\n	</span>\n	<span class=\"btn btn-primary\" data-mode=\"places\">\n		<span class=\"fui-location\"></span>\n	</span>\n	\n</div>\n\n";
  },"useData":true});
templates['app.footer'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div class=\"entry\">\n  <h1>"
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <h2>By "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n\n  <div class=\"body\">\n    "
    + escapeExpression(((helper = helpers.body || (depth0 && depth0.body)),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper)))
    + "\n  </div>\n</div>\n";
},"useData":true});
templates['app.stories'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"app-view stories-view app-view-hidden\">\n	<h2>Stories</h2>\n</div>\n";
  },"useData":true});
templates['app.timeline'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div class=\"timeline\">\n	<div class=\"inner\">\n		<div class=\"title\">"
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all\">\n			<div class=\"ui-slider-body\">\n				<div class=\"ui-slider-range ui-widget-header ui-corner-all ui-slider-range-before\"></div>\n				<div class=\"ui-slider-segments\"></div>\n				<div class=\"ui-slider-range ui-widget-header ui-corner-all ui-slider-range-after\"></div>\n			</div>\n\n			<div class=\"ui-slider-handle ui-state-default ui-corner-all handle-min\">\n				<div class=\"tooltip fade bottom in tooltip-min\">\n					<div class=\"tooltip-arrow\"></div>\n					<div class=\"tooltip-inner\">"
    + escapeExpression(((helper = helpers.startDate || (depth0 && depth0.startDate)),(typeof helper === functionType ? helper.call(depth0, {"name":"startDate","hash":{},"data":data}) : helper)))
    + "</div>\n				</div>\n			</div>\n			\n			<div class=\"ui-slider-handle ui-state-default ui-corner-all handle-max\">\n				<div class=\"tooltip fade bottom in tooltip-max\">\n					<div class=\"tooltip-arrow\"></div>\n					<div class=\"tooltip-inner\">"
    + escapeExpression(((helper = helpers.endDate || (depth0 && depth0.endDate)),(typeof helper === functionType ? helper.call(depth0, {"name":"endDate","hash":{},"data":data}) : helper)))
    + "</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();