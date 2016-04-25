require(['react'], function(React) {
	var Widget = React.createClass({displayName: "Widget",
		render: function() {
			return (React.createElement("div", {className: "widget"}
						
					))
		}
	});

	return Widget;
})