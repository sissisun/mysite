require(['react'], function(React) {
	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function() {
			return (React.createElement("div", {class: "col-sm-6 col-md-4"}, 
				React.createElement(Thumbnail, null)
				))
		}
	});

	React.render(React.createElement(Banner, null), document.getElementById('banner'));
});