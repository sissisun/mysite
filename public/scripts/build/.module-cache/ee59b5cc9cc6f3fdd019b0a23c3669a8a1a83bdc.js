require(['react'], function(React) {
	var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function() {
			return (React.createElement("div", {className: "thumbnail"}, 
				React.createElement("div", {className: "img-wrapper"}
					
				), 
				React.createElement("div", {className: "caption"}
					
				)
			))
		}
	});
});