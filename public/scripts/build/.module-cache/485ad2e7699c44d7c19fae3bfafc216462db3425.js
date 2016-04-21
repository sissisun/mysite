require(['react'], function(React) {
	var Banner = React.createClass({displayName: "Banner",
		render: function() {
			return (React.createElement("div", {className: "jumbotron bg-banner"}))
		}
	})
})