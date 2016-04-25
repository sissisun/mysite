require(['react'], function(React) {
	var Widget = React.createClass({displayName: "Widget",
		render: function() {
			return (React.createElement("div", {class: "widget"}, 
						React.createElement("h4", {class: "title"}, "链接"), 
						React.createElement("div", {class: "content"})
					))
		}
	});
})