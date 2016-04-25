require(['react'], function(React) {
	var Widget = React.createClass({displayName: "Widget",
		render: function() {
			return (React.createElement("div", {className: "widget"}, 
						React.createElement("h4", {className: "title"}, "链接"), 
						React.createElement("div", {className: "content"})
					))
		}
	});

	return Widget;
})