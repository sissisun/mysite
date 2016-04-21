define(['react', thumbnail], function(React, Thumbnail) {
	var ThumbnailSize = React.createClass({displayName: "ThumbnailSize",
		render: function() {
			return (React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				Thumbnail
				))
		}
	});
	return ThumbnailSize;
});