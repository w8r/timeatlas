(function() {
  var template = Handlebars.template, templates = Templates = Templates || {};
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
templates['app.timeline'] = template({"1":function(depth0,helpers,partials,data) {
  return "\n			<div class=\"ui-slider-segment\"></div>\n			";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"timeline\">\n	<div class=\"inner\">\n		<div class=\"title\">"
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.dates), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n			<div class=\"ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min\"></div>\n			<div class=\"slider-min\"></div>\n			<div class=\"slider-max\"></div>\n			<div class=\"ui-slider-handle ui-state-default ui-corner-all handle-min\"></div>\n			<div class=\"ui-slider-handle ui-state-default ui-corner-all handle-max\"></div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();