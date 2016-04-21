define(['react', thumbnail], function(React, Thumbnail) {
	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function() {
			return (React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				ThumbnailNodes
				))
		}
	});
	return ThumbnailSize;
});